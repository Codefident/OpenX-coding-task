import twoDigits from "./twoDigits.js";

test("twoDigits() 2.11000003", () => {
    expect(twoDigits(2.11000003)).toBe(2.11);
});

test("twoDigits() 4.20", () => {
    expect(twoDigits(4.2)).toBe(4.2);
});

test("twoDigits() 21.3799999999999", () => {
    expect(twoDigits(21.379999999999)).toBe(21.38);
});

test("twoDigits() -1.23456", () => {
    expect(twoDigits(-1.23456)).toBe(-1.23);
});

test("twoDigits() 2.50", () => {
    expect(twoDigits(2.5)).toBe(2.5);
});
