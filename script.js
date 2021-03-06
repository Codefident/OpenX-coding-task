import fetchData from "./js/fetchData.js";
import categorize from "./js/categorize.js";
import findCartHighestValue from "./js/findCartHighestValue.js";
import { longestDistanceUsers } from "./js/longestDistanceUsers.js";
import data_file from "./js/data.js";

function logTask(task_num, solution) {
    console.log(
        `\n\n\n==================== Task 2.${task_num} ====================\n\n`
    );
    console.log(solution);
}

// task 2.1

let data;

try {
    data = await fetchData([
        "https://fakestoreapi.com/users",
        "https://fakestoreapi.com/carts",
        "https://fakestoreapi.com/products",
    ]);
    logTask(1, data);
} catch (error) {
    logTask(1, "ERROR!\n\n" + error);
    data = data_file;
}

const users = data[0];
const carts = data[1];
const products = data[2];

// task 2.2
const categories = categorize(products);
logTask(2, categories);

// task 2.3
const biggest_cart = findCartHighestValue(users, carts, products);
logTask(3, biggest_cart);

// task 2.4
const longest_distance_users = longestDistanceUsers(users);
logTask(4, longest_distance_users);
