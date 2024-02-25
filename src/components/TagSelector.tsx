import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../api/tag";
import Autocomplete from "./Autocomplete";

const TagSelector = () => {
  const tagsQuery = useQuery({
    queryKey: ["TAGS"],
    queryFn: fetchTags,
  });
  console.log({ tagsQueryData: tagsQuery.data });
  return <Autocomplete options={tagsQuery.data ?? []} />;
};

export default TagSelector;
