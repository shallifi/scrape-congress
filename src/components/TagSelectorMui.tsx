import { Chip, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../api/tag";
import { useField } from "formik";

const TagSelectorMui = () => {
  const [field, _, helpers] = useField("tags");
  const tagsQuery = useQuery({
    queryKey: ["TAGS"],
    queryFn: fetchTags,
  });
  return (
    <Autocomplete
      multiple
      options={tagsQuery.data ?? []}
      onChange={(_, values) => helpers.setValue(values)}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            variant="filled"
            sx={{ mr: 1 }}
            label={option}
            {...getTagProps({ index })}
            className="bg-sky-500"
          />
        ))
      }
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          name="tags"
          {...params}
          label="Filter By Tags"
          placeholder="Tags"
        />
      )}
    />
  );
};

export default TagSelectorMui;
