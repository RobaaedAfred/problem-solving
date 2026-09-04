// Problem 5 — Debugging Challenge: AI Leaderboard Generator
//  Function Name Must be: generateLeaderboard
// Programming Hero's new AI Coding Arena has thousands of students solving problems every day. 
// At the end of the day, an AI Leaderboard Engine generates a list of top performers.

// The rules are very simple:
// Only students with a score of 70 or above will be on the leaderboard.
// Each qualified student's name must be converted to UPPERCASE.
// Only the top 3 students will be displayed on the leaderboard.

// However, there is a problem...
// A junior developer rushed and wrote the entire function but made many mistakes while trying to use ES6 features. Now the leaderboard is producing incorrect results. 
// Your task is to find and fix all the bugs.

// Input
// An array of objects, for example:
// [
//     { name: "Rafi", score: 90 },
//     { name: "Sadia", score: 65 },
//     { name: "Karim", score: 85 },
//     { name: "Nafis", score: 75 }
// ]

// Output
// An array, for example:
// ["RAFI", "KARIM", "NAFIS"] 

// Challenge
// After fixing the bugs, the function must also handle the following:
// Return "Invalid" if the input is not an array
// Return "Invalid" if the array is empty
// Return "Invalid" if any object is missing the name or score property
// // Return "Invalid" if the score is not a number
// Tips
// This function has more than 8 bugs.
// Carefully check:
// Is Array.isArray() used correctly?yes
// Is the empty array check correct?yes
// Does the filter() callback return anything?yes
// Are scores being filtered correctly according to the condition?
// Does the map() callback return anything?
// Is the result of toUpperCase() being returned?
// How many elements is slice() taking?
// Is validation complete?

// Buggy Code:
// /* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)|| students.length===0) {
        return "Invalid";
    }
    else if(students.find(user =>  !("name" in user) || !("score" in user) || typeof user.score !== "number")){
    return "Invalid";
    }

    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map(student  => student.name.toUpperCase());

    return names.slice(0, 3);
}

