/**
 * @param {string} s
 * @return {string}
 */

/*
* time O(n^2)
* space O(1)
*  */

var longestPalindrome = function(s) {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        const odd = expandPalindrome(s, i, i);
        const even = expandPalindrome(s, i, i + 1);

        if (odd.length > res.length) {
            res = odd;
        }

        if (even.length > res.length) {
            res = even;
        }
    }

    return res;
};

function expandPalindrome(s, left, right) {
    let minL = s.length;
    let maxR = 0;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        if ((right - left + 1) > (maxR - minL + 1)) {
            minL = left;
            maxR = right;
        }

        left -= 1;
        right += 1;
    }

    return s.slice(minL, maxR + 1);
}