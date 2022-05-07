import longestDistanceUsers from "./longestDistanceUsers.js";
import data from "./data.js";

test("returns two users living furthest away from each other", () => {
    expect(longestDistanceUsers(data[0])).toEqual([data[0][0], data[0][4]]);
});
