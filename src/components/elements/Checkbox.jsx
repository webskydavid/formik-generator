import React from "react";
import { Field } from "formik";

const Checkbox = props => {
  return <Field type="checkbox" {...props} />;
};

export default Checkbox;
