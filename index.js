const loaderUtils = require('loader-utils')
const frontmatter = require('front-matter')
const Mode = require('./mode')
const extractDocuments = require('./extractDocuments')
const fillExportTemplate = require('./fillExportTemplate')

const md = require('markdown-it')({
  html: true,
});

const stringify = (src) => JSON.stringify(src).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

let vueCompiler, vueCompilerStripWith
try {
  vueCompiler = require('vue-template-compiler')
  vueCompilerStripWith = require('vue-template-es2015-compiler')
} catch (err) {
}

module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  const options = loaderUtils.getOptions(this) || {}
  const requestedMode = Array.isArray(options.mode) ? options.mode : [Mode.HTML];
  const enabled = (mode) => requestedMode.includes(mode);
  const resourcePath = this.resourcePath;

  const namedSources = extractDocuments(source);
  const documents = namedSources.map(parse);
  const namedTransformations =
    documents.map(dumpWithOptions(resourcePath, options, enabled));
  const output = fillExportTemplate(namedTransformations);

  return `module.exports = ${output}`;
}

function parse({ name, content }, options) {
  const fm = frontmatter(content)
  fm.html = options.markdown ? options.markdown(fm.body) : md.render(fm.body);
  return {
    name,
    attributes: fm.attributes,
    html: fm.html,
    body: fm.body
  }
}

function dumpWithOptions(resourcePath, options, enabled) {
  return function (document) {
    return {
      name: document.name,
      transformed: `{ ${dump(document, resourcePath, options, enabled)} }`
    }
  }
}

function dump(document, resourcePath, options, enabled) {
  let output = '';
  const addProperty = (key, value) => {
    output += `
      ${key}: ${value},
    `;
  };

  addProperty('name', stringify(document.name));
  addProperty('attributes', stringify(document.attributes));
  if (enabled(Mode.HTML)) addProperty('html', stringify(document.html));
  if (enabled(Mode.BODY)) addProperty('body', stringify(document.body));
  if (enabled(Mode.META)) {
    const meta = {
      resourcePath
    };
    addProperty('meta', stringify(meta));
  }

  if ((enabled(Mode.VUE_COMPONENT) || enabled(Mode.VUE_RENDER_FUNCTIONS)) && vueCompiler && vueCompilerStripWith) {
    const rootClass = options.vue && options.vue.root ? options.vue.root : 'frontmatter-markdown';
    const template = document
      .html
      .replace(/<(code\s.+)>/g, "<$1 v-pre>")
      .replace(/<code>/g, "<code v-pre>");
    const compiled = vueCompiler.compile(`<div class="${rootClass}">${template}</div>`)
    const render = `return ${vueCompilerStripWith(`function render() { ${compiled.render} }`)}`

    let staticRenderFns = '';
    if (compiled.staticRenderFns.length > 0) {
      staticRenderFns = `return ${vueCompilerStripWith(`[${compiled.staticRenderFns.map(fn => `function () { ${fn} }`).join(',')}]`)}`
    }

    let vueOutput = '';

    if (enabled(Mode.VUE_RENDER_FUNCTIONS)) {
      vueOutput += `
        render: ${stringify(render)},
        staticRenderFns: ${stringify(staticRenderFns)},
      `;
    }

    if (enabled(Mode.VUE_COMPONENT)) {
      vueOutput += `
        component: {
          data: function () {
            return {
              templateRender: null
            }
          },
          render: function (createElement) {
            return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
          },
          created: function () {
            this.templateRender = ${vueCompilerStripWith(`function render() { ${compiled.render} }`)};
            this.$options.staticRenderFns = ${vueCompilerStripWith(`[${compiled.staticRenderFns.map(fn => `function () { ${fn} }`).join(',')}]`)};
          }
        }
      `;
    }

    addProperty('vue', `{${vueOutput}}`);
  }

  return output;
}
