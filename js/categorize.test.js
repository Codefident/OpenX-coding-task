import categorize from "./categorize.js";
import data from "./data.js";

const expected_output = {
    "men's clothing": { total_value: 204.23 },
    "jewelery": { total_value: 883.98 },
    "electronics": { total_value: 1994.99 },
    "women's clothing": { total_value: 157.72 }
};

test("putting products into categories and summing values", () => {
    expect(categorize(data[2])).toEqual(expected_output);
});
