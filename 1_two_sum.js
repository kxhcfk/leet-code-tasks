/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    time O(n^2)
    space O(1)
*/

var twoSumOne = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

/*
    time O(n)
    space O(n)
*/

var twoSumTwo = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const difference = target - value;

        if (map[difference] !== undefined) {
            return [map[difference], i];
        } else {
            map[value] = i;
        }
    }
};