import React, { InputHTMLAttributes, useState } from "react";
import FieldError from "./field_error";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    flag?: boolean
  ) => void;
  children?: React.ReactNode;
  label: string;
}

const InputBox = (props: InputBoxProps) => {
  const { className, name, label, onChange, ...rest } = props;

  const [error, setError] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    let flag = false;
    setError(flag);
    if (Number.isNaN(value) || 0 === value) {
      flag = true;
      setError(flag);
    }

    if (onChange) {
      onChange(e, flag);
    }

    return;
  };

  return (
    <div className="w-full mx-auto px-4 mt-2">
      <label htmlFor={name}>{label}</label>
      <br />
      <input className={className} onChange={handleOnChange} {...rest} />
      <FieldError isError={error} message={`${label} is not valid.`} />
    </div>
  );
};

export default InputBox;
