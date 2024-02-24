import { FormEventHandler } from "react";

type QueryInputProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const QueryInput = ({ onSubmit }: QueryInputProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <p className="text-gray-700">Enter your query below:</p>
        <input
          name="queryInput"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-accent" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default QueryInput;
