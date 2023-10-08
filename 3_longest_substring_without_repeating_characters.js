/**
 * @param {string} s
 * @return {number}
 */

/*
* time O(n)
* space O(n)
*  */

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let begin = 0;
    let set = new Set();

    for (let end = 0; end < s.length; end++) {
        if (!set.has(s[end])) {
            set.add(s[end])
            max = Math.max(max, end - begin + 1);
        } else {
            while (set.has(s[end])) {
                set.delete(s[begin])
                begin += 1;
                set.add(s[end]);
            }
        }
    }

    return max;
};