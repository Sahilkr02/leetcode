const { expect } = require('chai');
const { lengthOfLongestSubstring } = require('../scripts/p3');

/**
 * Given a string s, find the length of the longest substring without duplicate characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * 
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * 
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
describe('lengthOfLongestSubstring', () => {
    it('should return 3 for input "abcabcbb"', () => {
        const input = "abcabcbb";
        const expected = 3;
        expect(lengthOfLongestSubstring(input)).to.equal(expected);
    });

    it('should return 1 for input "bbbbb"', () => {
        const input = "bbbbb";
        const expected = 1;
        expect(lengthOfLongestSubstring(input)).to.equal(expected);
    });

    it('should return 3 for input "pwwkew"', () => {
        const input = "pwwkew";
        const expected = 3;
        expect(lengthOfLongestSubstring(input)).to.equal(expected);
    });

    it('should return 0 for empty string', () => {
        const input = "";
        const expected = 0;
        expect(lengthOfLongestSubstring(input)).to.equal(expected);
    });

    it('should return length of string if all characters are unique', () => {
        const input = "abcdef";
        const expected = 6;
        expect(lengthOfLongestSubstring(input)).to.equal(expected);
    });
});
