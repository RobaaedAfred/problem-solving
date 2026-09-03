// Problem 3 — AI Token Cost Calculator
//  Function Name Must be: calculateAiCost
// PromptPal, একটি AI writing assistant app, প্রতিদিন প্রতিটি ইউজারকে ৫০০ free token দেয়। এর বেশি ব্যবহার করলে অতিরিক্ত ব্যবহারের জন্য চার্জ করা হয় — এবং app টি চায় এমন একটি function যা স্বয়ংক্রিয়ভাবে বিল হিসাব করবে।

// Billing Rules
// প্রথম ৫০০ token ফ্রি। এরপর প্রতি অতিরিক্ত ১০০ token এর জন্য ৫ টাকা চার্জ হবে।

// Input
// একটি সংখ্যা, tokensUsed — সেদিন মোট কতগুলো token ব্যবহার হয়েছে।

// Output
// মোট খরচ, টাকায়, একটি সংখ্যা হিসেবে।

// Challenge
// tokensUsed সংখ্যা না হলে, অথবা negative হলে, "Invalid" রিটার্ন করবে।

// টিপস: প্রথমে ফ্রি ৫০০ token বাদ দাও, তারপর বাকি token কে ১০০ দিয়ে ভাগ করে Math.floor() দিয়ে পূর্ণ সংখ্যা বের করো, তারপর rate দিয়ে গুণ করো।

// Starter Code:
function calculateAiCost(tokensUsed) {
 if (typeof tokensUsed !== "number" || tokensUsed < 0){
    return "Invalid";
 }
 if (tokensUsed<=500){
    return 0;
 }
 let extratoken = tokensUsed-500;
  let tokencost = Math.floor(extratoken/100)*5;

  return tokencost;

}
console.log(calculateAiCost(599));