import { FormEventHandler, useState } from "react";
import "./App.css";
import QueryInput from "./components/QueryInput";
import { fetchQuery } from "./api/query";
import { Results } from "./components/Results";
import TagSelector from "./components/TagSelectorMui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InputForm from "./components/InputForm";

const queryClient = new QueryClient();

function App() {
  const [results, setResults] = useState<string>("");

  const onSubmit = async (values) => {
    // e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const query = formData.get("queryInput");
    // const tags = formData.get("tags");
    // console.log({ tags, query });
    try {
      const response = await fetchQuery(values);
      console.log({ response });
      // setResults(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-2" style={{ border: "2px solid" }}>
      <div className="flex flex-col items-center">
        <header className="">
          <h1 className="">Ecne</h1>
        </header>

        <QueryClientProvider client={queryClient}>
          <InputForm onSubmit={onSubmit} />
          <Results results={results} />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
