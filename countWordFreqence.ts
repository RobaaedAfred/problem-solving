// Given a sentence, return an object containing the frequency count of each word. Ignore case differences (e.g., treat "The" and "the" as the same word).

// Examples
// countWordFrequencies("Hello world, hello!");
// // Expected output:
// // {"hello": 2, "world": 1}

// countWordFrequencies("The quick brown fox jumps over the lazy dog.");
// // Expected output:
// // {"the": 2, "quick": 1, "brown": 1, "fox": 1, "jumps": 1, "over": 1, "lazy": 1, "dog": 1}
// Example 1
// Input: sentence = "Hello world, hello!"

// Output: {"hello":2,"world":1}

// Example 2
// Input: sentence = "The quick brown fox jumps over the lazy dog."

// Output: {"brown":1,"dog":1,"fox":1,"jumps":1,"lazy":1,"over":1,"quick":1,"the":2}

// Constraints
// The input `sentence` will be a string.
// Words consist of alphanumeric characters. Punctuation and spaces should be ignored when determining words.

// Topics
// string
// object
// hash map
// frequency
// easy

// Hints
// Hint 1. Consider converting the entire sentence to a consistent case (e.g., lowercase) first.
// Hint 2. You can use `String.prototype.split()` with a regular expression to break the sentence into words. A regex like `/[^a-z0-9]+/` can split by anything that isn't a letter or number.
// Hint 3. An object (or hash map) is suitable for storing word counts, where keys are words and values are their frequencies.

function countWordFrequencies(sentence: string): Record<string, number> {
  const words = sentence.toLowerCase().split(/[^a-z0-9]+/);

  const result: Record<string, number> = {};

  for (const word of words) {
    if (word === '') continue;

    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}
console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog."));