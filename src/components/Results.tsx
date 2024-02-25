import TextClamp from "./TextClamp";

type ResultsCardProps = {
  header: string;
  document: string;
  original_content: string;
  source_url: string;
  hash: number;
  metadata: Record<string, string>;
};
type ResultsProps = {
  results: ResultsCardProps[];
};

const ResultsCard = ({
  header,
  original_content,
  source_url,
  metadata,
}: ResultsCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{header}</h2>
      </div>
      <TextClamp text={original_content} />

      <a className="link py-4 px-2" href={source_url} target="_blank">
        {source_url}
      </a>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click to show Metadata
        </div>
        <div className="collapse-content">
          <p>{JSON.stringify(metadata)}</p>
        </div>
      </div>
    </div>
  );
};

export const Results = ({ results }: ResultsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {results.map((result, index) => (
        <ResultsCard
          key={index}
          header={result.header}
          source_url={result.source_url}
          original_content={result.original_content}
          metadata={result.metadata}
        />
      ))}
    </div>
  );
};
