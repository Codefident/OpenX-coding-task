import findCartHighestValue from "./findCartHighestValue.js";
import data from "./data.js";

test("finding cart with the highest value", () => {
    expect(findCartHighestValue(data[0], data[1], data[2])).toEqual({
        value: 2578.7,
        owner: "john doe",
    });
});
