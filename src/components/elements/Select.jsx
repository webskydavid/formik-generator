import React, { ErrorBoundery } from "react";
import get from "lodash/get";
import { Field } from "formik";

import SelectMUI from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const Select = ({ form, field, label, options }) => {
  const error = get(form.errors, field.name, false);
  const isTouched = get(form.touched, field.name, false);
  console.log("SELECT", { form, field, label, options }, error, isTouched);
  return (
    <FormControl fullWidth error={error && isTouched}>
      <InputLabel htmlFor="component-error">{label}</InputLabel>
      <SelectMUI {...field}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </SelectMUI>
      {isTouched && (
        <FormHelperText id="component-error-text">{error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
