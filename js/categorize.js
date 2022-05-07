//
// task 2.2
// creating a data structure to store product categories and total values of them
//

import twoDigits from "./twoDigits.js";

export default function categorize(products) {
    const categories = {};

    // putting products into categories and summing up

    for (const product of products) {
        const category = product.category;
        const price = product.price;

        if (!categories[category]) categories[category] = { total_value: 0 };
        categories[category].total_value += price;
    }

    // some float numbers might have more than 2 digits after decimal point, like 204.230002
    // we only need 2 digits

    for (const [key, value] of Object.entries(categories)) {
        const current_value = categories[key].total_value;

        categories[key].total_value = twoDigits(current_value);
    }

    return categories;
}
