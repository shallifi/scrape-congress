import { useState } from "react";
import "./App.css";
import { fetchQuery } from "./api/query";
import { Results } from "./components/Results";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InputForm from "./components/InputForm";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

function App() {
  const [results, setResults] = useState([]);

  const onSubmit = async (values) => {
    try {
      const response = await fetchQuery(values);
      console.log({ response });
      setResults(response.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-col items-center">
        <NavBar />
        <header className="">
          <h1 className="">Filter by Tags</h1>
        </header>

        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col items-center gap-4">
            <InputForm onSubmit={onSubmit} />
            <Results results={results} />
          </div>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
