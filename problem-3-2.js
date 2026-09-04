// Problem 3 —Trending Hashtag Counter
//  Function Name Must be: countHashtags
// Clipzy is a short-video app popular among Gen Z. It wants to determine how "trend-friendly" a caption is by counting the hashtags in it and finding the longest hashtag. Each hashtag is a word that starts with the # symbol.

// Your task is to write a function that scans a caption string and returns the total number of hashtags and the longest hashtag (without the # symbol).

// Input
// A string, caption, for example: "Loving this weather today #sunny #vibes #weekend"

// Output
// An Object with the shape: { hashtagCount: Number, longestTag: String }
// hashtagCount → Total number of words that start with # 

// Challenge
// Return "Invalid" if the input is not a string.
// longestTag → The text of the longest hashtag, without the # symbol (if multiple hashtags have the same length, return the one that appears first).
// If there are no hashtags, longestTag should be an empty string ("").

// Tips: Use split(" ")  to divide the caption into words, then check each word using startsWith("#").

// Starter Code:
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid"
    }
    let word = caption.split(" ")
    let count = 0
    let longtext = ""

    for (let i of word) {
        if (i.startsWith("#")) {
            count++;
            const tag = i.slice(1)
            if (tag.length > longtext.length) {
                longtext = tag
            }
        }

    }
    // console.log(caption) 
    return {
    hashtagCount: count,
        longestTag: longtext
};
}

console.log(countHashtags("Loving this weather today sunny #vibes #weekend"))