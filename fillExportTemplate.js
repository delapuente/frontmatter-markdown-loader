/**
 * Assemble the source code for the object exported by the loader. The object
 * act also as a proxy of the first document.
 *
 * In addition, the object has the `all` and `namedMap` properties with a list
 * of all the documents in the file and a map of named ones by name repectively.
 *
 * @param {Array<Object<string, string>>} namedTransformations
 */
function fillTemplate(namedTransformations) {
  const transformations =
    namedTransformations.map(({ transformed }) => transformed);

  const namedItems =
    namedTransformations
    .filter(({ name }) => !!name )
    .map(({ name, transformed }) => {
      return `${JSON.stringify(name)}:${transformed}`;
    });

  return `({
  _docs: [${transformations.join(', ')}],

  _named: {${namedItems.join(', ')}},

  get all() {
    return this._docs;
  },

  get namedDocs() {
    return this._named;
  },

  get name() {
    return this._docs[0].name;
  },

  get attributes() {
    return this._docs[0].attributes;
  },

  get body() {
    return this._docs[0].body;
  },

  get html() {
    return this._docs[0].html;
  },

  get vue() {
    return this._docs[0].vue;
  },

  get meta() {
    return this._docs[0].meta;
  }
})`
}

module.exports = function (namedTransformations) {
  return fillTemplate(namedTransformations);
}