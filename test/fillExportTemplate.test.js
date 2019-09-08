import nodeEval from "node-eval";
import FillExportTemplate from "../fillExportTemplate";

const DEFAULT_ATTRS = { attrs: 'attrs' };
const DEFAULT_BODY = "# This is content";
const DEFAULT_HTML = "<h1>This is content</h1>";
const DEFAULT_VUE = { vue: 'vue' };
const DEFAULT_META = { meta: 'meta' };

let result;

function fillExportTemplate(namedTransformations) {
  result = nodeEval(FillExportTemplate(namedTransformations));
  return result;
}

function generate(attrs, body, html, vue, meta) {
  return JSON.stringify({
    attributes: attrs || DEFAULT_ATTRS,
    body: body || DEFAULT_BODY,
    html: html || DEFAULT_HTML,
    vue: vue || DEFAULT_VUE,
    meta: meta || DEFAULT_META
  });
}

describe("fillExportTemplate", () => {
  it("top-level API mimics first document API", () => {
    const namedTransformations = [
      { name: '', transformed: generate() }
    ];
    fillExportTemplate(namedTransformations);
    expect(result.attributes).toEqual(DEFAULT_ATTRS);
    expect(result.body).toEqual(DEFAULT_BODY);
    expect(result.html).toEqual(DEFAULT_HTML);
    expect(result.vue).toEqual(DEFAULT_VUE);
    expect(result.meta).toEqual(DEFAULT_META);
  });
});