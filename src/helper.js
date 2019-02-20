import React from "react";

export const Pre = ({ label = "values", values = "" }) => (
  <React.Fragment>
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem"
      }}
    >
      <strong>{label}</strong> = {JSON.stringify(values, null, 2)}
    </pre>
  </React.Fragment>
);

export default {
  Pre
};
