import { useField } from "formik";
import { FormEventHandler } from "react";

const QueryInput = () => {
  const [field, _, helpers] = useField("query");
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        <p>Ask the questions, get to the source! Decide for yourself.</p>
        <textarea
          id="query"
          name="query"
          onChange={(e) => helpers.setValue(e.target.value)}
          className="textarea textarea-bordered min-h-48 "
          placeholder="What do you want to know about congress?"
        ></textarea>
        <button className="btn btn-accent w-full" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default QueryInput;
