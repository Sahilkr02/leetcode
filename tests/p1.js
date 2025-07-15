/**
 * Import the twoSum function from the script 
 */
const { expect } = require('chai');
const { twoSum } = require('../scripts/p1');

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * 
 * Example 1:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 */

describe('twoSum', () => {
  it('should return indices [0, 1] for nums = [2,7,11,15] and target = 9', () => {
    const result = twoSum([2,7,11,15], 9);
    expect(result).to.deep.equal([0, 1]);
  });

  it('should return indices [1, 2] for nums = [3,2,4] and target = 6', () => {
    const result = twoSum([3,2,4], 6);
    expect(result).to.deep.equal([1, 2]);
  });

  it('should return indices [0, 1] for nums = [3,3] and target = 6', () => {
    const result = twoSum([3,3], 6);
    expect(result).to.deep.equal([0, 1]);
  });

  it('should return an empty array if no two numbers sum to target', () => {
    const result = twoSum([1, 2, 3], 7);
    expect(result).to.deep.equal([]);
  });

  /**
   * Additional edge cases for thorough testing 
   */ 
  it('should return an empty array for empty input array', () => {
    const result = twoSum([], 5);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array for single element array', () => {
    const result = twoSum([1], 1);
    expect(result).to.deep.equal([]);
  });

  it('should handle negative numbers correctly', () => {
    const result = twoSum([-3, 4, 3, 90], 0);
    expect(result).to.deep.equal([0, 2]);
  });

  it('should handle zeros correctly', () => {
    const result = twoSum([0, 4, 3, 0], 0);
    expect(result).to.deep.equal([0, 3]);
  });

  it('should handle large input arrays efficiently', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    const target = 19998; /** sum of last two elements 9999 + 9999 */
    const result = twoSum(largeArray, target);
    expect(result).to.deep.equal([]);
  });
});
