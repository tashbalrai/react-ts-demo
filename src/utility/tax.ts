import { TaxData, TaxRates } from "../config/types";

const calculateTaxHelper = (state: TaxData, brackets: TaxRates[]): TaxData => {
  let remainingIncome = state.input.totalIncome;
  let netIncome = state.input.totalIncome;

  if (0 === brackets.length) {
    return { ...state, results: [], netIncome };
  }

  // if income is less than taxable income; return
  if (brackets[0].max && state.input.totalIncome < brackets[0].max) {
    return { ...state, results: [], netIncome };
  }

  const res = [];
  for (const bracket of brackets) {
    let amount = 0;
    let tax = 0;

    if (0 >= remainingIncome) break;

    if (bracket.max && bracket.max > 0) {
      amount = Number(bracket.max) - Number(bracket.min);
    } else if (remainingIncome > 0) {
      amount = remainingIncome;
    }

    if (amount > remainingIncome) {
      amount = remainingIncome;
    }

    tax = amount * Number(bracket.rate);
    remainingIncome -= amount;
    netIncome = netIncome - tax;

    res.push({
      rate: Number(bracket.rate),
      amount,
      tax,
      bracket: {
        min: Number(bracket.min),
        max: Number(bracket.max) ? Number(bracket.max) : 0,
      },
    });
  }
  return { ...state, results: res, netIncome };
};

export default calculateTaxHelper;
