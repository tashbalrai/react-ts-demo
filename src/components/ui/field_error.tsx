import React from "react";
import { FieldError } from "../../config/types";

const FieldErrorView = ({ isError, message }: FieldError) => {
  return isError ? <div className="w-full text-red-500">{message}</div> : null;
};

export default FieldErrorView;
