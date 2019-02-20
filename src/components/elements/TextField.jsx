import React from "react";
import get from "lodash/get";
import { Field } from "formik";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const TextField = ({ form, field, label }) => {
  const error = get(form.errors, field.name, false);
  const isTouched = get(form.touched, field.name, false);
  return (
    <FormControl fullWidth error={error && isTouched}>
      <InputLabel htmlFor="component-error">{label}</InputLabel>
      <Input {...field} />

      {isTouched && (
        <FormHelperText id="component-error-text">{error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default TextField;
