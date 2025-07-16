/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map(); // to store value -> index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]; // return indices
        }

        map.set(nums[i], i);
    }

    return []; // no solution found
};

module.exports = { twoSum };