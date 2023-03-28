import { API_URL } from "../config/api-settings";
import { TaxRates } from "../config/types";

const fetchTaxRates = async (
  year: number | null = null
): Promise<TaxRates[]> => {
  let url = API_URL;
  if (null !== year) {
    url = API_URL + `/${year}`;
  }
  return fetch(url)
    .then((response) => {
      if (true !== response.ok || 200 !== response.status) {
        throw new Error(
          "An unexpected error happened. Please try again later."
        );
      }

      return response.json();
    })
    .then((json) => {
      if (!("tax_brackets" in json)) throw new Error("Invalid data from API.");

      //make sure brackets are always in ASC order.
      const brackets = json.tax_brackets.sort(
        (a: TaxRates, b: TaxRates) => a.min - b.min
      );

      return brackets as TaxRates[];
    });
};

export default fetchTaxRates;
