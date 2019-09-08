import nodeEval from "node-eval";
import FillExportTemplate from "../fillExportTemplate";

const defaultDoc = {
  name: 'default',
  attributes: { attrs: 'default' },
  body: '# Default doc',
  html: '<h1>Default doc</h1>',
  vue: { vue: 'default' },
  meta: { meta: 'default' }
};

const unnamedDoc = {
  name: '',
  attributes: { attrs: 'unnamed' },
  body: '# Unnamed doc',
  html: '<h1>Unnamed doc</h1>',
  vue: { vue: 'unnamed' },
  meta: { meta: 'unnamed' }
}

const namedDoc = {
  name: 'test',
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

  it("has the property `all` with all the documents in same order", () => {
    const documents = [defaultDoc, unnamedDoc, namedDoc]
    const namedTransformations = documents.map((doc) => {
      return { name: '_', transformed: JSON.stringify(doc) };
    });
    fillExportTemplate(namedTransformations);
    result.all.forEach((doc, index) => {
      const expected = documents[index];
      expect(doc).toEqual(expected);
    })
  });

  it("has the property `namedMap` with a map of documents by name", () => {
    const documents = [defaultDoc, unnamedDoc, namedDoc];
    const namedTransformations = documents.map((doc) => {
      return { name: doc.name, transformed: JSON.stringify(doc) };
    });
    fillExportTemplate(namedTransformations);
    expect(Object.keys(result.namedDocs)).toHaveLength(2);
    expect(result.namedDocs).toHaveProperty('default', defaultDoc);
    expect(result.namedDocs).toHaveProperty('test', namedDoc);
    expect(result.namedDocs).not.toHaveProperty('');
  });

  it("top-level API mimics first document API", () => {
    const namedTransformations = [
      { name: defaultDoc.name, transformed: JSON.stringify(defaultDoc) }
    ];
    fillExportTemplate(namedTransformations);
    const firstDoc = result.all[0];
    expect(result.name).toEqual(firstDoc.name);
    expect(result.attributes).toEqual(firstDoc.attributes);
    expect(result.body).toEqual(firstDoc.body);
    expect(result.html).toEqual(firstDoc.html);
    expect(result.vue).toEqual(firstDoc.vue);
    expect(result.meta).toEqual(firstDoc.meta);
  });
});