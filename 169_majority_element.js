/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cnd = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            cnd = nums[i];
        }
        count += (nums[i] === cnd ? 1 : -1);
    }

    return cnd;
};