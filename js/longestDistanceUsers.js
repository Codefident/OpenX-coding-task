//
// task 2.4
// find two users living furthest away from each other
//

// ~Earth radius
const kms = 6371.0;
const miles = 3963.0;

function toRadians(a) {
    return {
        lat: parseFloat(a.lat) / (180 / Math.PI),
        long: parseFloat(a.long) / (180 / Math.PI),
    };
}

function distance(a, b) {
    a = toRadians(a);
    b = toRadians(b);

    const d = kms * Math.acos(
        Math.sin(a.lat) * Math.sin(b.lat) +
            Math.cos(a.lat) * Math.cos(b.lat) * Math.cos(b.long - a.long)
    );

    return d;
}

function longestDistanceUsers(users) {
    let longest_distance = 0;
    let indexes = [0, 0];

    const n = users.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const d = distance(
                users[i].address.geolocation,
                users[j].address.geolocation
            );

            if (d > longest_distance) {
                longest_distance = d;
                indexes = [i, j];
            }
        }
    }

    return [users[indexes[0]], users[indexes[1]]];
}

export { longestDistanceUsers, distance, toRadians };
