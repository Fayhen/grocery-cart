// This file loads dummy data from a JSON file. The fetch()
// function takes a "productType" argument used to provide
// parsed data to Vue components.
//
// JSON structure is:
// {
//   "productType": [
//     {
//       "id": "string",
//       "name": "Avocado",
//       "description": "The popular big-seeded fruit.",
//       "value": "3.10"
//     },
//     ...
//   ],
//   ...
// }

import rawData from "../assets/products.json";

type rawData = { [k: string]: any };

function fetchProducts(productType: string) {
  const productData: rawData = rawData;
  const products = productData[productType];
  
  return products;
}

export { fetchProducts as default };
