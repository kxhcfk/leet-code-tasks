/**
 * @param {number} x
 * @return {number}
 */
/*
* time O(n^2)
* space O(1)
*  */
var reverse = function(x) {
    if (
        (x < -(2 ** 31)) ||
        (x > (2 ** 31 - 1))
    ) return 0;

    let num = Math.abs(x);
    let res = '';

    while (num >= 1) {
        res += num % 10;
        num = Math.floor(num / 10);
    }

    res = Number(res) * (x < 0 ? -1 : 1);

    if (
        (res < -(2 ** 31)) ||
        (res > (2 ** 31 - 1))
    ) {
        return 0;
    } else {
        return res;
    }
};

console.log(reverse(1534236469))
console.log(reverse(120))