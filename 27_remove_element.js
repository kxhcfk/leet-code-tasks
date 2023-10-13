/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/*
* time O(n)
* space O(1)
* */
var removeElement = function (nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
};

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))