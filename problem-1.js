// ২০২৬ FIFA World Cup-এর Group Stage চলছে। প্রতিটি ম্যাচ শেষে FIFA-এর Automated Result System দুই দলের গোল সংখ্যা গ্রহণ করে এবং ম্যাচের ফলাফল প্রকাশ করে।
// তোমার কাজ হলো এমন একটি Function তৈরি করা যা Team A এবং Team B-এর গোল সংখ্যা দেখে ম্যাচের ফলাফল নির্ধারণ করবে।

// Input
// Function দুটি Parameter গ্রহণ করবে—
// teamAGoals → Team A-এর Goal সংখ্যা
// teamBGoals → Team B-এর Goal সংখ্যা

// Rules
// Team A বেশি Goal করলে "Team A Won" Return করতে হবে।
// Team B বেশি Goal করলে "Team B Won" Return করতে হবে।
// Goal সমান হলে "Draw" Return করতে হবে।

// Challenge
// Return "Invalid" যদি কোনো Input Number না হয়।


function matchWinner(teamAGoals, teamBGoals) {

    if (typeof teamAGoals !=="number" || typeof teamBGoals !=="number"){
        return "Invalid";
    }
    else if(teamAGoals===teamBGoals){
        return "Draw"
    }
    else if(teamAGoals>teamBGoals){
        return "Team A Won"
    }
    else if(teamAGoals<teamBGoals){
        return "Team B Won"
    }
    
}

console.log(matchWinner(2));