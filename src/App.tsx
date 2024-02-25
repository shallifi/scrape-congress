import { FormEventHandler, useState } from "react";
import "./App.css";
import QueryInput from "./components/QueryInput";
import { fetchQuery } from "./api/query";
import { Results } from "./components/Results";
// import logo from "./assets/logo.jpeg";

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
      <header className="header-container">
      {/* <div className="logo-container">
      <img src={logo} alt="logo" className="main-logo" />
      </div> */}
      <h1 className="text-brand-name" >Ecne</h1>
      
      </header>
      <QueryInput onSubmit={onSubmit} />
      <Results results={results} />
    </div>
  );
}

export default App;
