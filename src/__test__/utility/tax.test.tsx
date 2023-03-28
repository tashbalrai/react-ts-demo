import React from "react";
import calculateTaxHelper from "../../utility/tax";

describe("Tax Calculator", () => {
  test("Test total income less than max of the first bracket", () => {
    const state = {
      input: {
        totalIncome: 0,
        year: 2019,
      },
      results: [],
      netIncome: 0,
    };

    expect(
      calculateTaxHelper(state, [{ max: 100, min: 0, rate: 0.5 }])
    ).toEqual(state);
  });

  test("Tax is calculate, according to the brackets", () => {
    const state = {
      input: {
        totalIncome: 200,
        year: 2019,
      },
      results: [],
      netIncome: 0,
    };
    const res = calculateTaxHelper(state, [
      { max: 100, min: 0, rate: 0.5 },
      { max: 150, min: 100, rate: 0.5 },
      { max: 200, min: 150, rate: 0.5 },
    ]);

    expect(res.results?.[0].tax).toEqual(50);
    expect(res.results?.[1].tax).toEqual(25);
    expect(res.results?.[2].tax).toEqual(25);
    expect(res.results?.[0].amount).toEqual(100);
    expect(res.results?.[1].amount).toEqual(50);
    expect(res.results?.[2].amount).toEqual(50);
    expect(res.netIncome).toEqual(100);
  });

  test("No tax brackets, return prev state, plus netIncome equals to total income", () => {
    const state = {
      input: {
        totalIncome: 200,
        year: 2019,
      },
      results: [],
      netIncome: 0,
    };
    const res = calculateTaxHelper(state, []);

    expect(res.netIncome).toEqual(state.input.totalIncome);
    expect(res.results).toEqual(state.results);
    expect(res.input).toEqual(state.input);
  });
});
