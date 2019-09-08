# Options

The loader accepts some options to configure.

[[toc]]

## Mode

`options.mode` option requests what you can import from frontmatter markdown data.

This option is added since 2.0.0. So see [Migration Guide](migration) if you are using `1.x`.

```js
import Mode from 'frontmatter-markdown-loader/mode'
```

will provide constats. `Mode.NAME_OF_MODE`.

::: tip Plain string is available
You may not want to import `frontmatter-markdown-loader/mode`. Then you can just give string instead.

- `Mode.HTML` -> `"html"`
- `Mode.BODY` -> `"body"`
- `Mode.META` -> `"meta"`
- `Mode.VUE_COMPONENT` -> `"vue-component"`
- `Mode.VUE_RENDER_FUNCTIONS` -> `"vue-render-functions"`
:::

### Default

By default (When we don't specify any `mode` option), `attributes` and `html` are only available.

That's equivalent to:

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    mode: [Mode.HTML]
  }
}
```

```js
import fm from "something.md"

fm.attributes //=> { subject: "Hello", tags: ["tag1", "tag2"] }
fm.html //=> "<h1>Title</h1>\n<p>message</p>\n"
```

### Raw markdown

`Mode.BODY` gives raw string of Markdown part on frontmatter markdown.

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    mode: [Mode.BODY]
  }
}
```

```js
import fm from "something.md"

fm.attributes //=> { subject: "Hello", tags: ["tag1", "tag2"] }
fm.html //=> undefined
fm.body //=> "# Title\n\nmessage\n"
```

### Metadata

`Mode.META` shows the metadata of the frontmatter markdown file.

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    mode: [Mode.META]
  }
}
```

```js
import fm from "something.md"

fm.meta //=> { resourcePath: "/somepath/something.md" }
```

Currently, only `resourcePath` is available which returns [the path for the file in Webpack's context](https://webpack.js.org/api/loaders/#thisresourcepath).

### Vue component

`Mode.VUE_COMPONENT` requests to get the extendable component object of Vue.

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    mode: [Mode.VUE_COMPONENT]
  }
}
```

```js
import fm from "something.md"

fm.vue.component //=> The object which can be extendable as Vue component which has compiled HTML as the template
```

::: tip How to use in Vue
To see the usage of `fm.vue.component`, see [this page](/vue).
:::

### Vue's render functions

`Mode.VUE_RENDER_FUNCTIONS` requests to get functions which are required to build Vue component. The function is having the compiled markdown as template of component.

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    mode: [Mode.VUE_RENDER_FUNCTIONS]
  }
}
```

```js
import fm from "something.md"

fm.vue.render //=> render function as string
fm.vue.staticRenderFns //=> List of staticRender function as string
```

::: tip How to use in Vue
To see the usage of `fm.vue.component`, see [this page](/vue).
:::

## Markdown compiler

You can specify the compiler for Markdown as you like. `options.markdown` expects the callback function which takes the string of markdown for its argument. And expects returning compiled HTML.

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    markdown: (body) => {
      return compileWithYourMDCompiler(body)
    }
  }
}
```

As default, compiling markdown with [markdown-it](https://www.npmjs.com/package/markdown-it) with allowing HTML. So that's equivalent to:

```js
const md = require('markdown-it')({ html: true })

...

{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    markdown: (body) => {
      return md.render(body)
    }
  }
}
```

## Vue's root element

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    vue: {
      root: 'dynamicContent'
    }
  }
}
```

can specify the class name of the root element on the imported Vue's template.

## Multiple mode

Multiple mode enable writing multiple frontmatter docs in the same file.

For enabling multiple mode, set the option `multiple` to `true`.

```js
{
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader'
  options: {
    multiple: true
  }
}
```

Start a new document by separating it with `---` followed with the name of the new document or `_` for creating an anonymous document.

```md
<!-- multiple-docs.md -->
---
title: One document
---
Contents

---another
title: Another document
---
More contents
```

The loaded module is a proxy for the very first document:

```js
import docs from 'multiple-docs.md'
docs.name //=> "default"
docs.attributes //=> { "title": "One document" }
```

You can access all the documents through the properties `all` or `namedDocs`:

```js
docs.all //=> list with all the documents
docs.all[1].name //=> "another"
docs.namedDocs //=> object with the document objects by name
docs.namedDocs.another.body //=> "More contents"
```
