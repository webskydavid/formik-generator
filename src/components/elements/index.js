import React from "react";
import Select from "./Select";
import Checkbox from "./Checkbox";
import TextField from "./TextField";

const elements = {
  select: Select,
  checkbox: Checkbox,
  text: TextField
};

export const getElement = (type, props) => {
  const Component = elements[type];
  return Component;
};

export default elements;
