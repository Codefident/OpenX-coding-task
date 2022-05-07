export default function twoDigits(x) {
    return Math.round((x + Number.EPSILON) * 100) / 100;
}