import { FormEventHandler, useState } from "react";
import "./App.css";
import QueryInput from "./components/QueryInput";
import { fetchQuery } from "./api/query";
import { Results } from "./components/Results";

function App() {
  const [results, setResults] = useState<string>("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("queryInput") as string;
    try {
      const response = await fetchQuery(query);
      setResults(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <QueryInput onSubmit={onSubmit} />
      <Results results={results} />
    </div>
  );
}

export default App;
