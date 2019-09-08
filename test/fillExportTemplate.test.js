import nodeEval from "node-eval";
import FillExportTemplate from "../fillExportTemplate";

const defaultDoc = {
  attributes: { attrs: 'default' },
  body: '# Default doc',
  html: '<h1>Default doc</h1>',
  vue: { vue: 'default' },
  meta: { meta: 'default' }
};

const unnamedDoc = {
  attributes: { attrs: 'unnamed' },
  body: '# Unnamed doc',
  html: '<h1>Unnamed doc</h1>',
  vue: { vue: 'unnamed' },
  meta: { meta: 'unnamed' }
}

const namedDoc = {
  attributes: { attrs: 'named' },
  body: '# Named doc',
  html: '<h1>Named doc</h1>',
  vue: { vue: 'named' },
  meta: { meta: 'named' }
}

let result;

function fillExportTemplate(namedTransformations) {
  result = nodeEval(FillExportTemplate(namedTransformations));
  return result;
}

describe("fillExportTemplate", () => {
  it("top-level API mimics first document API", () => {
    const namedTransformations = [
      { name: '', transformed: JSON.stringify(defaultDoc) }
    ];
    fillExportTemplate(namedTransformations);
    expect(result.attributes).toEqual(defaultDoc.attributes);
    expect(result.body).toEqual(defaultDoc.body);
    expect(result.html).toEqual(defaultDoc.html);
    expect(result.vue).toEqual(defaultDoc.vue);
    expect(result.meta).toEqual(defaultDoc.meta);
  });

  it("has the property `allDocs` with all the documents in same order", () => {
    const documents = [defaultDoc, unnamedDoc, namedDoc]
    const namedTransformations = documents.map((doc) => {
      return { name: '_', transformed: JSON.stringify(doc) };
    });
    fillExportTemplate(namedTransformations);
    result.allDocs.forEach((doc, index) => {
      const expected = documents[index];
      expect(doc.attributes).toEqual(expected.attributes);
      expect(doc.body).toEqual(expected.body);
      expect(doc.html).toEqual(expected.html);
      expect(doc.vue).toEqual(expected.vue);
      expect(doc.meta).toEqual(expected.meta);
    })
  });
});