// Given a string, find the first character that appears only once in the string. If no such character exists, return -1.

// Example 1
// Input: s = "aabbcdeff"

// Output: "c"

// Example 2
// Input: s = "aabb"

// Output: -1

// Constraints
// The input string `s` will consist of lowercase English letters.
// `s` length will be between 0 and 1000.

// Topics
// String
// Hash Map
// Frequency Counter

// Hints
// Hint 1. Consider using a frequency map (like a JavaScript object or `Map`) to store character counts.
// Hint 2. You might need to iterate through the string twice: once to count frequencies, and once to find the first character with a count of 1.

function findFirstUniqueChar(s: string): string | number {

    if (!/^[a-z]*$/.test(s)) {
        return -1;
    }

    if (s.length > 1000) {
        return -1;
    }

    let arr = s.split("");

    return arr.find(char =>
        arr.filter(x => x === char).length === 1
    ) || -1;
}

