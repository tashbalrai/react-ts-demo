import { SelectHTMLAttributes, InputHTMLAttributes } from "react";

// Tax related types
export interface UserInput {
  totalIncome: number;
  year?: number;
}

export interface TaxResult {
  rate: number;
  amount: number;
  tax: number;
  bracket: { min: number; max: number };
}

export interface FieldError {
  isError: boolean;
  message: string;
}

export interface TaxRates {
  max?: number;
  min: number;
  rate: number;
}

export interface TaxData {
  input: UserInput;
  results?: TaxResult[];
  netIncome?: number;
}

//Input html element types
export interface SelectBoxProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  onChange?: (
    event: React.ChangeEvent<{ value: unknown }>,
    flag?: boolean
  ) => void;
  children?: React.ReactNode;
  label: string;
}

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    flag?: boolean
  ) => void;
  children?: React.ReactNode;
  label: string;
}

//FieldErrorView type
export interface FieldError {
  isError: boolean;
  message: string;
}
