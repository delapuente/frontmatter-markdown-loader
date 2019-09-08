import ExtractDocuments from "../extractDocuments";

let result;

function extractDocuments(source) {
  result = ExtractDocuments(source);
  return result;
}

function nameddoc(name, content='') {
  return `---${name}
title: A Document
tags:
  - tag1
  - tag2
---
${content || 'This is content.'}`
}

function anondoc(content='') {
  return nameddoc('', content);
}

const anonymousDoc = anondoc();

describe("extractDocuments", () => {
  it("recognizes a regular frontmatter document", () => {
    extractDocuments(anonymousDoc);
    expect(result).toHaveLength(1);
    const [{ name, content }] = result;
    expect(name).toEqual("");
    expect(content).toEqual(anonymousDoc);
  });

  it("recognizes a named frontmatter document", () => {
    const named = nameddoc("doc1");
    const [{ name, content }] = extractDocuments(named);
    expect(name).toEqual("doc1");
    expect(content).toEqual(anondoc());
  })

  it("recognizes several named frontmatter documents", () => {
    const indices = [1, 2, 3];
    const docNames = indices.map(index => `doc${index}`);
    const documents = docNames.map(name => nameddoc(name));
    const severalDocuments = documents.join("\n\n") + "\n\n";
    extractDocuments(severalDocuments);
    expect(result).toHaveLength(indices.length);
    result.forEach(({ name, content }, index) => {
      expect(name).toEqual(docNames[index]);
      expect(content).toEqual(`${anonymousDoc}

`);
    });
  });

  it("only recognizes one anonymous document at the very top", () => {
    const mixedDocs = `${anonymousDoc}
${nameddoc('doc1')}`;
    extractDocuments(mixedDocs);
    expect(result).toHaveLength(2);
    const [doc1, doc2] = result;
    expect(doc1.name).toEqual("");
    expect(doc2.name).toEqual("doc1");
    expect(doc1.content).toEqual(`${anonymousDoc}\n`);
    expect(doc2.content).toEqual(anonymousDoc);
  });

  it("does not recognizes an anonymous after the first named one", () => {
    const mixedDocs = `${nameddoc("doc1")}
${anonymousDoc}`;
    extractDocuments(mixedDocs);
    expect(result).toHaveLength(1);
    const [{ name, content }] = result;
    expect(name).toEqual("doc1")
    expect(content).toEqual([anonymousDoc, anonymousDoc].join('\n'))
  });

  it("preserves blanks in the documents", () => {
    const docsWithBlanks = `


${anonymousDoc}

${nameddoc("doc1")}


`;
    extractDocuments(docsWithBlanks);
    expect(result).toHaveLength(2);
    expect(result[0].content).toEqual(`


${anonymousDoc}

`);
    expect(result[1].content).toEqual(`${anonymousDoc}


`)
  });

  it("does not recognize documents if they don't start at the beginning of the line", () => {
    const docsWithBlanks = `


${anonymousDoc}

  ${nameddoc("doc1")}


`;
    extractDocuments(docsWithBlanks);
    expect(result).toHaveLength(1);
    expect(result[0].name).toEqual('');
    expect(result[0].content).toEqual(`


${anonymousDoc}

  ${nameddoc("doc1")}


`);
  });

  it("cannot recognazie content-only named docs", () => {
    const docWithNoYaml = `---noYaml
This is content.`;
    const secondDocWithNoYAML = `${anonymousDoc}
${docWithNoYaml}
`;
    extractDocuments(secondDocWithNoYAML);
    expect(result).toHaveLength(2);
    expect(result[1].name).toEqual('noYaml');
    expect(result[1].content).not.toEqual(`This is content.`);
  });
});