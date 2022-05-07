import categorize from "./categorize.js";
import data from "./data.js";

const custom_products = [
    { category: "a", price: 5 },
    { category: "b", price: 2 },
    { category: "c", price: 11 },
    { category: "b", price: 7.99 },
    { category: "a", price: 3.27 },
    { category: "b", price: 0.49 },
];

const custom_products_expected_output = {
    a: { total_value: 8.27 },
    b: { total_value: 10.48 },
    c: { total_value: 11 },
};

const fakestore_expected_output = {
    "men's clothing": { total_value: 204.23 },
    jewelery: { total_value: 883.98 },
    electronics: { total_value: 1994.99 },
    "women's clothing": { total_value: 157.72 },
};

// fakestore data

test("categorize() - fakestore data", () => {
    expect(categorize(data[2])).toEqual(fakestore_expected_output);
});

// custom data

test("categorize() - custom data", () => {
    expect(categorize(custom_products)).toEqual(custom_products_expected_output);
});
