/**
 * @param {number[]} nums
 * @return {number}
 */
/*
* time O(n)
* space O(1)
* */
var removeDuplicates = function(nums) {
    let l = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[l] = nums[i];
            l += 1;
        }
    }

    return l;
};