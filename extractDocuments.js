const NAMED_DOCUMENT_MARK = /^---(.+)\n/gm;

module.exports = function (source) {
  const mark = new RegExp(NAMED_DOCUMENT_MARK);

  function extract(startIndex, endIndex) {
    const mark = new RegExp(NAMED_DOCUMENT_MARK);
    return source.substring(startIndex, endIndex).trim().replace(mark, "---\n");
  }

  const result = [];
  let match = mark.exec(source);
  let currentKey = '';
  if (match && match.index == 0) {
    currentKey = match[1];
    match = mark.exec(source);
  }
  let startIndex = 0;
  let endIndex = null;
  let nextKey = null;
  while (match) {
    nextKey = match[1];
    endIndex = match.index;
    result.push([currentKey, extract(startIndex, endIndex)]);
    startIndex = endIndex;
    currentKey = nextKey;
    match = mark.exec(source);
  }
  result.push([currentKey, extract(startIndex, source.length)]);
  return result;
}
