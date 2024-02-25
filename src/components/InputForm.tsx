import { FormEventHandler } from "react";
import QueryInput from "./QueryInput";
import TagSelectorMui from "./TagSelectorMui";
import { Formik } from "formik";

type QueryInputProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const InputForm = ({ onSubmit }: QueryInputProps) => {
  return (
    <Formik initialValues={{ tags: [], query: "" }} onSubmit={onSubmit}>
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <TagSelectorMui />
          <QueryInput />
        </form>
      )}
    </Formik>
  );
};

export default InputForm;
