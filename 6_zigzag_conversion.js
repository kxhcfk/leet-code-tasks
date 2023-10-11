/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let res = '';

    for (let r = 0; r < numRows; r++) {
        let inc = 2 * (numRows - 1);

        for (let i = r; i < s.length; i += inc) {
            res += s[i];

            if (
                (r > 0) &&
                (r < numRows - 1) &&
                (i + inc - 2 * r < s.length)
            ) {
                res += s[i + inc - 2 * r]
            }
        }
    }

    return res;
};