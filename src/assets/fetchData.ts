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

import rawData from './products.json';

type rawData = { [k: string]: any }

function fetchProducts(productType: string) {
  console.log("called fetchData with productType:");
  console.log(productType);
  const productData: rawData = rawData;
  console.log(productData);
  const products = productData[productType];
  console.log(products);
  return products;
};

export { fetchProducts as default };
