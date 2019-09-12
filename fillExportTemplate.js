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
    .map(({ name }, index) => [name, index])
    .filter(([name, _]) => !!name )
    .map(([name, index ]) => {
      return `get [${JSON.stringify(name)}]() { return _docs[${index}]; }`;
    });

  return `(function () {
    let _docs = [${transformations.join(', ')}];
    let _named = {${namedItems.join(', ')}};
    return {
      get all() {
        return _docs;
      },

      get namedDocs() {
        return _named;
      },

      get name() {
        return _docs[0].name;
      },

      get attributes() {
        return _docs[0].attributes;
      },

      get body() {
        return _docs[0].body;
      },

      get html() {
        return _docs[0].html;
      },

      get vue() {
        return _docs[0].vue;
      },

      get meta() {
        return _docs[0].meta;
      }
    };
  }())`
}

module.exports = function (namedTransformations) {
  return fillTemplate(namedTransformations);
}