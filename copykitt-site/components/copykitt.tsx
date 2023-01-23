import React from "react";

const CopyKitt: React.FC = () => {
  const ENDPOINT: string =
    "https://jc6l1abonc.execute-api.ap-northeast-1.amazonaws.com/prod/generate_snippet_and_keywords";

  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  };

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setHasResult(true);
  };

  let resultsElement = null;

  if (hasResult) {
    resultsElement = (
      <div>
        Here are your results:
        <div>Snippet: {snippet}</div>
        <div>Keywords: {keywords.join(", ")}</div>
      </div>
    );
  }

  return (
    <>
      <h1>CopyKitt!</h1>
      <p>
        Tell me what your brand is about and I will generate copy and keywords
        for you.
      </p>
      <input
        type="text"
        placeholder="coffee"
        value={prompt}
        onChange={(e) => setPrompt(e.currentTarget.value)}
      ></input>
      <button onClick={onSubmit}>Submit</button>
      {resultsElement}
    </>
  );
};

export default CopyKitt;
