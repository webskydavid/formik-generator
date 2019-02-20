import React, { Component, Fragment } from "react";
import ElementWrap from "./ElementWrap";
import { Pre } from "./../helper";
import { Formik, Form } from "formik";

class Former extends Component {
  constructor(props) {
    super(props);
  }

  static ElementWrap = props => {
    return <ElementWrap {...props} />;
  };

  render() {
    console.log("Former render()");
    return (
      <Fragment>
        <Formik {...this.props.config}>
          {props => {
            return (
              <Form>
                {/* FormWrapper for Formik form, each elemen is a form*/}
                {React.Children.map(this.props.children, child => {
                  const { formName, show, formElements = [] } = child.props;
                  console.log("CHILD", child);

                  const shown =
                    props.values.formType === child.props.formName ||
                    child.props.formName === "formType";
                  return shown
                    ? React.cloneElement(child, {
                        ...props,
                        switcher: !!child.switcher,
                        formName,
                        formElements
                      })
                    : null;
                })}
                <Pre label="Former" values={props} />
              </Form>
            );
          }}
        </Formik>
      </Fragment>
    );
  }
}

export default Former;
