import {
    longestDistanceUsers,
    toRadians,
    distance,
} from "./longestDistanceUsers.js";
import data from "./data.js";

const custom_data = [
    {
        address: {
            geolocation: {
                lat: "51.752737",
                long: "19.459982",
            },
        },
        id: 1,
    },
    {
        address: {
            geolocation: {
                lat: "50.072824",
                long: "20.117401",
            },
        },
        id: 2,
    },

    {
        address: {
            geolocation: {
                lat: "50.072824",
                long: "20.117401",
            },
        },
        id: 3,
    },
    {
        address: {
            geolocation: {
                lat: "52.464034",
                long: "16.917268",
            },
        },
        id: 4,
    },
];

// =================================================
//         longestDistanceUsers()
// =================================================

// logestDistanceUsers, fakestore

test("longestDistance() - fakestoreapi.com/users", () => {
    expect(longestDistanceUsers(data[0])).toEqual([data[0][0], data[0][4]]);
});

// custom data

test("longestDistance() - custom data", () => {
    expect(longestDistanceUsers(custom_data)).toEqual([
        custom_data[1],
        custom_data[3],
    ]);
});

// =================================================
//         toRadians()
// =================================================

// custom data

test("toRadians() latitude - custom data [0]", () => {
    const latitude_radians = toRadians(custom_data[0].address.geolocation).lat;
    expect(latitude_radians).toBeCloseTo(0.90325565757);
});

test("toRadians() longitude - custom data [0]", () => {
    const longitude_radians = toRadians(
        custom_data[0].address.geolocation
    ).long;
    expect(longitude_radians).toBeCloseTo(0.33964075828);
});
