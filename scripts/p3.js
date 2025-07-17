/**
 * Length of Longest Substring Without Repeating Characters
 * @param {string} s 
 * @returns 
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0, maxLength = 0, charIndex = {};
    for (let right = 0; right < s.length; right++) {
        if (s[right] in charIndex) left = Math.max(left, charIndex[s[right]] + 1);
        charIndex[s[right]] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

module.exports = { lengthOfLongestSubstring };