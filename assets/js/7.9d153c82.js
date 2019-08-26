(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{271:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("The loader accepts some options to configure.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#mode"}},[t._v("Mode")]),s("ul",[s("li",[s("a",{attrs:{href:"#default"}},[t._v("Default")])]),s("li",[s("a",{attrs:{href:"#raw-markdown"}},[t._v("Raw markdown")])]),s("li",[s("a",{attrs:{href:"#metadata"}},[t._v("Metadata")])]),s("li",[s("a",{attrs:{href:"#vue-component"}},[t._v("Vue component")])]),s("li",[s("a",{attrs:{href:"#vue-s-render-functions"}},[t._v("Vue's render functions")])])])]),s("li",[s("a",{attrs:{href:"#markdown-compiler"}},[t._v("Markdown compiler")])]),s("li",[s("a",{attrs:{href:"#vue-s-root-element"}},[t._v("Vue's root element")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Mode")]),t._v(" "),s("p",[s("code",[t._v("options.mode")]),t._v(" option requests what you can import from frontmatter markdown data.")]),t._v(" "),s("p",[t._v("This option is added since 2.0.0. So see "),s("a",{attrs:{href:"/migration"}},[t._v("Migration Guide")]),t._v(" if you are using "),s("code",[t._v("1.x")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader/mode'")]),t._v("\n")])])]),s("p",[t._v("will provide constats. "),s("code",[t._v("Mode.NAME_OF_MODE")]),t._v(".")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Plain string is available")]),t._v(" "),s("p",[t._v("You may not want to import "),s("code",[t._v("frontmatter-markdown-loader/mode")]),t._v(". Then you can just give string instead.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Mode.HTML")]),t._v(" -> "),s("code",[t._v('"html"')])]),t._v(" "),s("li",[s("code",[t._v("Mode.BODY")]),t._v(" -> "),s("code",[t._v('"body"')])]),t._v(" "),s("li",[s("code",[t._v("Mode.META")]),t._v(" -> "),s("code",[t._v('"meta"')])]),t._v(" "),s("li",[s("code",[t._v("Mode.VUE_COMPONENT")]),t._v(" -> "),s("code",[t._v('"vue-component"')])]),t._v(" "),s("li",[s("code",[t._v("Mode.VUE_RENDER_FUNCTIONS")]),t._v(" -> "),s("code",[t._v('"vue-render-functions"')])])])]),t._v(" "),s("h3",{attrs:{id:"default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default","aria-hidden":"true"}},[t._v("#")]),t._v(" Default")]),t._v(" "),s("p",[t._v("By default (When we don't specify any "),s("code",[t._v("mode")]),t._v(" option), "),s("code",[t._v("attributes")]),t._v(" and "),s("code",[t._v("html")]),t._v(" are only available.")]),t._v(" "),s("p",[t._v("That's equivalent to:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something.md"')]),t._v("\n\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//=> { subject: "Hello", tags: ["tag1", "tag2"] }')]),t._v("\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//=> "<h1>Title</h1>\\n<p>message</p>\\n"')]),t._v("\n")])])]),s("h3",{attrs:{id:"raw-markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raw-markdown","aria-hidden":"true"}},[t._v("#")]),t._v(" Raw markdown")]),t._v(" "),s("p",[s("code",[t._v("Mode.BODY")]),t._v(" gives raw string of Markdown part on frontmatter markdown.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BODY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something.md"')]),t._v("\n\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//=> { subject: "Hello", tags: ["tag1", "tag2"] }')]),t._v("\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> undefined")]),t._v("\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//=> "# Title\\n\\nmessage\\n"')]),t._v("\n")])])]),s("h3",{attrs:{id:"metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadata","aria-hidden":"true"}},[t._v("#")]),t._v(" Metadata")]),t._v(" "),s("p",[s("code",[t._v("Mode.META")]),t._v(" shows the metadata of the frontmatter markdown file.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("META")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something.md"')]),t._v("\n\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//=> { resourcePath: "/somepath/something.md" }')]),t._v("\n")])])]),s("p",[t._v("Currently, only "),s("code",[t._v("resourcePath")]),t._v(" is available which returns "),s("a",{attrs:{href:"https://webpack.js.org/api/loaders/#thisresourcepath",target:"_blank",rel:"noopener noreferrer"}},[t._v("the path for the file in Webpack's context"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"vue-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue component")]),t._v(" "),s("p",[s("code",[t._v("Mode.VUE_COMPONENT")]),t._v(" requests to get the extendable component object of Vue.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_COMPONENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something.md"')]),t._v("\n\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> The object which can be extendable as Vue component which has compiled HTML as the template")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("How to use in Vue")]),t._v(" "),s("p",[t._v("To see the usage of "),s("code",[t._v("fm.vue.component")]),t._v(", see "),s("a",{attrs:{href:"/vue"}},[t._v("this page")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"vue-s-render-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-s-render-functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue's render functions")]),t._v(" "),s("p",[s("code",[t._v("Mode.VUE_RENDER_FUNCTIONS")]),t._v(" requests to get functions which are required to build Vue component. The function is having the compiled markdown as template of component.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_RENDER_FUNCTIONS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something.md"')]),t._v("\n\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> render function as string")]),t._v("\nfm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staticRenderFns "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> List of staticRender function as string")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("How to use in Vue")]),t._v(" "),s("p",[t._v("To see the usage of "),s("code",[t._v("fm.vue.component")]),t._v(", see "),s("a",{attrs:{href:"/vue"}},[t._v("this page")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"markdown-compiler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-compiler","aria-hidden":"true"}},[t._v("#")]),t._v(" Markdown compiler")]),t._v(" "),s("p",[t._v("You can specify the compiler for Markdown as you like. "),s("code",[t._v("options.markdown")]),t._v(" expects the callback function which takes the string of markdown for its argument. And expects returning compiled HTML.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("markdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileWithYourMDCompiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("As default, compiling markdown with "),s("a",{attrs:{href:"https://www.npmjs.com/package/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),s("OutboundLink")],1),t._v(" with allowing HTML. So that's equivalent to:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" md "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("markdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"vue-s-root-element"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-s-root-element","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue's root element")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.md$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frontmatter-markdown-loader'")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dynamicContent'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("can specify the class name of the root element on the imported Vue's template.")])])},[],!1,null,null,null);a.default=e.exports}}]);