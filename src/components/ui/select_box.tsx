import React, { useState } from "react";
import FieldErrorView from "./field_error";
import { SelectBoxProps } from "../../config/types";

const SelectBox = (props: SelectBoxProps) => {
  const { className, name, label, onChange, ...rest } = props;

  const [error, setError] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value;
    let flag = false;
    setError(flag);
    if ("" === value) {
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
      <select className={className} onChange={handleOnChange} {...rest}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <FieldErrorView
        isError={error}
        message={`Please select a value from ${label}.`}
      />
    </div>
  );
};

export default SelectBox;
