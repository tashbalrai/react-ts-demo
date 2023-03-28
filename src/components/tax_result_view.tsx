import React from "react";
import { TaxResult, UserInput } from "../config/types";

const TaxResultsView = ({
  data: result,
  input,
  netIncome,
}: {
  data: TaxResult[] | undefined;
  input: UserInput;
  netIncome: number | undefined;
}) => {
  return (
    <section className="col-span-3 bg-sky-50 p-2">
      <h2 className="text-xl font-bold">Results</h2>
      <div className="px-2">
        <p className="text-cyan-600">
          <label>Total Income:</label> {input.totalIncome.toFixed(2)}
        </p>
        {result &&
          result.map((tax, idx) => {
            return (
              <p className="text-cyan-600" key={idx}>
                <label>
                  Tax Bracket({tax.bracket.min.toFixed(2)} -{" "}
                  {tax.bracket.max.toFixed(2)}):
                </label>
                {tax.tax.toFixed(2)}&nbsp;(at {tax.rate.toFixed(3)})
              </p>
            );
          })}

        <p className="text-cyan-600 border-t-2 border-cyan-600 mt-5">
          <label className="font-bold">Net Income:</label>{" "}
          {netIncome?.toFixed(2)}
        </p>
      </div>
    </section>
  );
};

export default TaxResultsView;
