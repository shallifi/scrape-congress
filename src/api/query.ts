import axios from "axios";

type QueryPayload = {
  query: string;
  tags: string[];
};

export const fetchQuery = async (payload: QueryPayload) => {
  const { query, tags } = payload;
  console.log({ payload });
  const response = await axios.post(`http://localhost:8000/docs/query`, {
    query,
    tags,
  });
  return response.data;
};
