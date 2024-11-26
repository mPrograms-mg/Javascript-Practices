// How would you group JSON data by a specific field name? Given the input and expected output below, Write function to convert this json Data transformation.

const input = [
  { name: "John", age: 31, region: "USA" },
  { name: "Jack", age: 27, region: "USA" },
  { name: "Carol", age: 28, region: "Sweden" },
  { name: "Zayn", age: 31, region: "Denmark" },
  { name: "Mathew", age: 28, region: "Sweden" },
  { name: "Abraham", age: 35, region: "Germany" },
  { name: "Daniel", age: 27, region: "USA" },
  { name: "Zara", age: 31, region: "Germany" },
];

groupByFieldName(input, "region");

function groupByFieldName(data, region) {
  let finalResult = {};

  for (let i = 0; i < data.length; i++) {
    let key = data[i][region];
    if (!finalResult[key]) {
      let result = data.filter((item) => {
        return item[region] == key;
      });

      finalResult[key] = result;
    }
  }
  console.log("Final Result....", finalResult);
}
