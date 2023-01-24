interface ResultsProps {
  prompt: string;
  snippet: string;
  keywords: string[];
  onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {
  const keywordsElements = [];
  for (let i = 0; i < props.keywords.length; i++) {
    const element = (
      <div
        key={i}
        className="bg-teal-200 p-1 text-teal-700 px-2  text-sm rounded-md"
      >
        #{props.keywords[i]}
      </div>
    );
    keywordsElements.push(element);
  }

  const resultSection = (label: string, body: any) => {
    return (
      <div className="bg-slate-700 p-4 my-2 rounded-md">
        <div className="text-slate-300 text-sm font-bold mb-1">{label}</div>
        <div>{body}</div>
      </div>
    );
  };

  const keywordElementHolder = (
    <div className="flex flex-wrap gap-2">{keywordsElements}</div>
  );

  return (
    <>
      <div className="mb-4">
        {resultSection(
          "Prompt",
          <div className="text-xl font-bold"> {props.prompt}</div>
        )}
        {resultSection("Snippet", props.snippet)}
        {resultSection("Keywords", keywordElementHolder)}
      </div>
      <button
        className="bg-gradient-to-r from-teal-400 to-blue-500 
          disabled:opacity-50 w-full p-2 rounded-md text-lg"
        onClick={props.onBack}
      >
        Back
      </button>
    </>
  );
};

export default Results;
