import React, { SelectHTMLAttributes, useState } from "react";
import FieldError from "./field_error";

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  children?: React.ReactNode;
  label: string;
}

const SelectBox = (props: SelectBoxProps) => {
  const { className, name, label, onChange, ...rest } = props;

  const [error, setError] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value;

    setError(false);
    if ("" === value) {
      setError(true);
    }

    if (onChange) {
      onChange(e);
    }

    return;
  };

  return (
    <div className="w-full mx-auto px-4 mt-2">
      <label htmlFor={name}>{label}</label>
      <br />
      <select className={className} onChange={handleOnChange} {...rest}>
        <option value="">Select</option>
        <option value="1">Select1</option>
        <option value="two">Select2</option>
      </select>
      <FieldError
        isError={error}
        message={`Please select a value from ${label}.`}
      />
    </div>
  );
};

export default SelectBox;
