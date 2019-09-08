const NAMED_DOCUMENT_MARK = /^---(.+)\n/gm;
const ANONYMOUS_DELIMITER = '---\n';
const NO_NAME = '';
const END_OF_FILE = {};

/**
 * Enable iteration through the frontmatter documents in a file. The iterator
 * looks for separator of the form `---name` at the beginning of one line. All
 * the content between two of these marks is considered a document.
 *
 * One unnamed document is allowed (i.e. starting with `---`) at the beginning
 * of the file to recognize the common and normal case of having just one
 * frontmatter document.
 *
 * The iterator does not care about the semantics of the frontmatter.
 */
class FMDocumentFinder {
  constructor(source) {
    this._source = source;
    this._startIndex = 0;
    this._documentName = NO_NAME;
    this._documentDelimiter = new RegExp(NAMED_DOCUMENT_MARK);
    this._finder = new RegExp(NAMED_DOCUMENT_MARK);
    this._done = false;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this._done) { return { done: true }; }
    return {
      done: false,
      value: this._findNextDocument()
    };
  }

  _findNextDocument() {
    const nextDocPointer = this._locateNextDocument();
    if (nextDocPointer === END_OF_FILE) {
      return this._getLastDocument();
    }

    const document =
      this._getDocumentEndingAt(nextDocPointer.startIndex);
    this._advanceSearchTo(nextDocPointer);

    const anonymousDocIsEmpty = document.name === NO_NAME && !document.content;
    if (anonymousDocIsEmpty) {
      return this._findNextDocument();
    }

    return document;
  }

  _locateNextDocument() {
    const match = this._finder.exec(this._source);
    return !match ? END_OF_FILE : {
      name: match[1],
      startIndex: match.index
    };
  }

  _getLastDocument() {
    const document = {
      name: this._documentName.trim(),
      content: this._extractDocContent(this._startIndex, this._source.length)
    };
    this._done = true;
    return document;
  }

  _getDocumentEndingAt(endIndex) {
    return {
      name: this._documentName,
      content: this._extractDocContent(this._startIndex, endIndex)
    };
  }

  _extractDocContent(startIndex, endIndex) {
    return this._source
      .substring(startIndex, endIndex)
      .replace(this._documentDelimiter, ANONYMOUS_DELIMITER);
  }

  _advanceSearchTo({ name, startIndex }) {
    this._documentName = name;
    this._startIndex = startIndex;
  }
}

/**
 * Return a list of objects with `name` and `content` keys.
 */
module.exports = function (source) {
  return [...new FMDocumentFinder(source)]
}
