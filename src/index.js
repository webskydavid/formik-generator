// Helper styles for demo
import "./helper.css";
import * as _ from "lodash";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { Form, Formik, Field, withFormik } from "formik";
import * as Yup from "yup";
import FormWrap from "./components/FormWrap";

const config = {
  resetOnSwitch: true,
  mapPropsToValues: values => {
    console.log(values);
  },
  enableReinitialize: true,
  initialValues: {
    formType: "type2"
  },
  onSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  },
  validationSchema: Yup.object({
    type1: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required")
    }),
    type2: Yup.object({
      age: Yup.number()
        .positive()
        .integer()
    })
      .default(null)
      .nullable()
  })
};

const type1 = [
  {
    type: "text",
    name: "firstname",
    label: "Firstname"
  },
  {
    type: "text",
    name: "lastname",
    label: "Lastname"
  }
];

const type2 = [
  {
    type: "text",
    name: "age",
    label: "Age"
  },
  {
    type: "checkbox",
    name: "human",
    label: "Is Human"
  },
  {
    placeholder: "select",
    type: "select",
    name: "bla",
    options: [{ value: "Foo", label: "Foo" }, { value: "Bar", label: "Bar" }]
  }
];

const App = props => {
  return (
    <Fragment>
      <FormWrap config={config}>
        <FormWrap.ElementWrap
          formName="formType"
          formElements={[
            {
              placeholder: "select",
              type: "select",
              name: "formType",
              options: [
                { value: "type1", label: "Form 1" },
                { value: "type2", label: "Form 2" }
              ]
            }
          ]}
          switcher
        />
        <hr />
        <FormWrap.ElementWrap formName="type1" formElements={type1} />
        <FormWrap.ElementWrap formName="type2" formElements={type2} />
      </FormWrap>
    </Fragment>
  );
};

render(<App />, document.getElementById("root"));
