import React, { useCallback, useEffect, useState } from "react";
import InputBox from "../components/ui/input_box";

const CalculatorLevel1 = () => {
  const [incomeFlag, setIncomeFlag] = useState<boolean>(false);
  const [totalIncome, setIncome] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [net, setNet] = useState<number>(0);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setRate(0.12);
  }, []);

  const calculateTax = useCallback(() => {
    let tax = 0;
    let net = 0;
    if (totalIncome > 0) {
      tax = totalIncome * rate;
      net = totalIncome - tax;
    }
    setTax(tax);
    setNet(net);
  }, [totalIncome, rate]);

  const handleCalculation = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    calculateTax();
    setMessage("Unexpected error occurred.");
  };

  const handleOnChangeIncome = (
    e: React.ChangeEvent<HTMLInputElement>,
    flag = false
  ) => {
    setIncomeFlag(flag);
    setIncome(0);
    if (false === flag) {
      setIncome(Number(e.target.value));
    }
  };

  return (
    <>
      <section className="col-span-3 p-2">
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
      <section className="col-span-2 bg-sky-50 p-2">
        <h2 className="text-xl font-bold">Results</h2>
        <div className="px-2">
          <p className="text-cyan-600">
            <label>Total Income:</label> {totalIncome}
          </p>
          <p className="text-cyan-600">
            <label>Total Tax:</label> {tax}
          </p>
          <p className="text-cyan-600">
            <label>Tax Rate:</label> {rate}
          </p>
          <p className="text-cyan-600 border-t-2 border-cyan-600 mt-5">
            <label className="font-bold">Net Income:</label> {net}
          </p>
        </div>
      </section>
    </>
  );
};

export default CalculatorLevel1;
