import React, { Fragment } from "react";
import { Field } from "formik";
import { getElement } from "./elements";

const FormWrapper = props => {
  console.log("FormWrapper", props);

  return (
    <Fragment>
      {props.formElements.map(item => {
        console.log("Item", item);
        const name = `${props.formName}.${item.name}`;
        return (
          <Field
            key={name}
            name={name}
            label={item.label}
            options={item.options || []}
            component={getElement(item.type)}
          />
        );
      })}
    </Fragment>
  );
};

export default FormWrapper;
