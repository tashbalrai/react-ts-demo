import React, { useCallback, useEffect, useState } from "react";
import InputBox from "../components/ui/input_box";
import TaxResultsView from "./tax_result_view";
import fetchTaxRates from "../api/tax";
import { TaxRates, TaxData } from "../config/types";
import calculateTaxHelper from "../utility/tax";

const CalculatorLevel1 = () => {
  const [incomeFlag, setIncomeFlag] = useState<boolean>(false);

  const [state, setState] = useState<TaxData>({ input: { totalIncome: 0 } });
  const [brackets, setTaxBrackets] = useState<TaxRates[] | null>(null);

  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setMessage(null);
    fetchTaxRates()
      .then((brackets: TaxRates[]) => {
        setTaxBrackets(brackets);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  const handleCalculation = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (null === brackets) {
      return;
    }

    setState(calculateTaxHelper(state, brackets));
  };

  const handleOnChangeIncome = (
    e: React.ChangeEvent<HTMLInputElement>,
    flag = false
  ) => {
    setIncomeFlag(flag);
    setState({ ...state, input: { totalIncome: Number(e.target.value) } });
  };

  return (
    <>
      {/*TODO: convert to Component  */}
      <section className="col-span-2 p-2">
        <h2 className="text-xl font-bold">Tax Calculator</h2>
        {message && <div className="w-full p-2 text-red-600">{message}</div>}
        <form onSubmit={handleCalculation}>
          <InputBox
            label="Income Amount"
            className="text-gray-600 border-2 w-full h-10 rounded-md p-2 border-grey-400 hover:shadow-md"
            name="income"
            id="income"
            placeholder="Enter your income"
            onChange={handleOnChangeIncome}
          />
          <div className="w-full mx-auto px-4 mt-2">
            <input
              type="submit"
              name="submitBtn"
              id="submitBtn"
              className="disabled:bg-slate-300 w-full h-10 rounded-md p-2 bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer text-white font-bold"
              value="Calculate"
              disabled={incomeFlag}
            />
          </div>
        </form>
      </section>
      <TaxResultsView
        data={state.results}
        input={state.input}
        netIncome={state.netIncome}
      />
    </>
  );
};

export default CalculatorLevel1;
