import fetchData from "./fetchData.js";
import data from "./data.js";
import { jest } from "@jest/globals";

// 10 seconds of time for this test
jest.setTimeout(15000);

const urls = [
    "https://fakestoreapi.com/users",
    "https://fakestoreapi.com/carts",
    "https://fakestoreapi.com/products",
];

test("fetching from the server", async () => {
    const response = await fetchData(urls);
    expect(response).toEqual(data);
});
