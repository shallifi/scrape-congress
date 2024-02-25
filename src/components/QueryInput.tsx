import { FormEventHandler } from "react";

type QueryInputProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const QueryInput = ({ onSubmit }: QueryInputProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <p className="text-gray-700">Ask the questions, get to the source! Decide for yourself.</p>
        <input
          name="queryInput"
          type="text"
          placeholder="Type here"
          // className="input input-bordered w-full max-w-xs"
          className="text-input-box"
        />
      </div>
        <button className="btn btn-accent" type="submit">
          Search
        </button>
    </form>
  );
};

export default QueryInput;
