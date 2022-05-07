//
// task 2.1
// retrieving data from server
//

import fetch from "node-fetch";

export default async function fetchData(urls) {
    const n = urls.length;
    const promises = new Array(n);

    for (let i = 0; i < n; i++)
        promises[i] = fetch(urls[i]).then(response => response.json());

    const response = await Promise.all(promises);

    return response;
}
