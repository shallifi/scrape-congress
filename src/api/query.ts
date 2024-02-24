import axios from "axios";
export const fetchQuery = async (query: string) => {
  const response = await axios.post(`http://localhost:8000/docs/query`, {
    query,
  });
  return response.data;
};
