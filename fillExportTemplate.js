function fillTemplate(namedTransformations) {
  const transformations =
    namedTransformations.map(({ transformed }) => transformed);

  return `({
  _docs: [${transformations.join(', ')}],

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