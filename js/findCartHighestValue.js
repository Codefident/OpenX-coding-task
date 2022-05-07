//
// task 2.3
// cart with highest value, function returns value and full name of its owner
//

import twoDigits from "./twoDigits.js";

export default function findCartHighestValue(users, carts, products) {
    let highest_value = {
        i: null,
        value: 0,
    };

    // iterating over every single cart

    for (let i = 0; i < carts.length; i++) {
        let value = 0;

        // all products in cart

        for (const cart_product of carts[i].products) {
            const id = cart_product.productId;
            const quantity = cart_product.quantity;

            // searching for a price of the product

            for (const product of products)
                if (product.id == id) {
                    value += product.price * quantity;
                    break;
                }
        }

        // saving value and index (in received array, not id of cart)

        if (value > highest_value.value) {
            highest_value = {
                i: i,
                value: value,
            };
        }
    }

    let owner = "";

    // specifying the owner

    for (const user of users) {
        if (user.id == carts[highest_value.i].userId) {
            owner = user.name.firstname + " " + user.name.lastname;
            break;
        }
    }

    return {
        value: twoDigits(highest_value.value),
        owner: owner,
    };
}
