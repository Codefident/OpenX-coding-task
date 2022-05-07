import fetchData from "./js/fetchData.js";
import categorize from "./js/categorize.js";
import findCartHighestValue from "./js/findCartHighestValue.js";
import longestDistanceUsers from "./js/distance.js";

function logTask(task_num, solution) {
    console.log(
        `\n\n\n==================== Task 2.${task_num} ====================\n\n`
    );
    console.log(solution);
    //console.log("\n\n==================================================\n");
}

// task 2.1
const data = await fetchData([
    "https://fakestoreapi.com/users",
    "https://fakestoreapi.com/carts",
    "https://fakestoreapi.com/products",
]);
logTask(1, data);

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
