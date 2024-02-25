import axios from "axios";

const TAG_ENDPOINT = "/docs/tags/";

export const fetchTags = async () => {
  const response = await axios.get(`${TAG_ENDPOINT}`);
  return response.data.result;
};
