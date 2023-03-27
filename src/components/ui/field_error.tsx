import React from "react";

interface FieldError {
  isError: boolean;
  message: string;
}

const FieldError = ({ isError, message }: FieldError) => {
  return isError ? <div className="w-full text-red-500">{message}</div> : null;
};

export default FieldError;
