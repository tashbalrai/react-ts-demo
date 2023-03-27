import React from "react";
import InputBox from "../components/ui/input_box";
import SelectBox from "../components/ui/select_box";

const CalculatorLevel2 = () => {
  const handleOnChangeIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value + " Parent");
  };

  const handleOnChangeYear = (e: React.ChangeEvent<{ value: unknown }>) => {
    console.log(e.target.value + " Parent Year");
  };

  const validateForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="col-span-3 p-2">
        <h2 className="text-xl font-bold">Tax Calculator</h2>
        <form onSubmit={validateForm}>
          <SelectBox
            label="Select Tax Year"
            name="year"
            id="year"
            className="text-gray-600 border-2 w-full h-10 rounded-md p-2 border-grey-400 hover:shadow-md"
            onChange={handleOnChangeYear}
          />
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
              className="w-full h-10 rounded-md p-2 bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer text-white font-bold"
              value="Calculate"
            />
          </div>
        </form>
      </section>
      <section className="col-span-2 bg-sky-50 p-2">
        <h2 className="text-xl font-bold">Results</h2>
        <div className="px-2">
          <p className="text-cyan-600">
            <label>Total Income:</label> 60000
          </p>
          <p className="text-cyan-600">
            <label>Total Tax:</label> 60000
          </p>
          <p className="text-cyan-600 border-t-2 border-cyan-600 mt-5">
            <label className="font-bold">Net Income:</label> 60000
          </p>
        </div>
      </section>
    </>
  );
};

export default CalculatorLevel2;
