import findCartHighestValue from "./findCartHighestValue.js";
import data from "./data.js";

const custom_carts = [
    {
        userId: 2,
        products: [
            { productId: 1, quantity: 21 },
            { productId: 2, quantity: 37 },
        ],
    },
    {
        userId: 1,
        products: [
            { productId: 2, quantity: 4 },
            { productId: 1, quantity: 20 },
        ],
    },
];

const custom_products = [
    {
        id: 1,
        price: 10.2,
    },
    {
        id: 2,
        price: 2.99,
    },
];

const custom_users = [
    {
        id: 1,
        name: {
            firstname: "Aleksander",
            lastname: "Jablonowski",
        },
    },
    {
        id: 2,
        name: {
            firstname: "Jakub 'Jupik'",
            lastname: "Jupson",
        },
    },
];

// fakestore data

test("cart with highest value - server data", () => {
    expect(findCartHighestValue(data[0], data[1], data[2])).toEqual({
        value: expect.closeTo(2578.7, 2),
        owner: "john doe",
    });
});

// custom data

test("cart with highest value - custom data", () => {
    expect(
        findCartHighestValue(custom_users, custom_carts, custom_products)
    ).toEqual({
        value: expect.closeTo(324.83, 2),
        owner: "Jakub 'Jupik' Jupson",
    });
});
