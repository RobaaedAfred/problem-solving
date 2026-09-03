

// Problem 4 — Top Rated Restaurant Finder
//  Function Name Must be: topRatedRestaurant
// FoodNow একটি food delivery app, যা একজন কাস্টমারের এলাকার সবচেয়ে ভালো রেটিং পাওয়া রেস্টুরেন্ট হাইলাইট করতে চায়। রেস্টুরেন্টের তথ্য একটি Array of Object হিসেবে সংরক্ষণ করা হয়েছে, যেখানে প্রতিটি Object-এ name এবং একটি rating থাকবে।
// তোমার কাজ হলো এমন একটি ফাংশন লেখা যা সবচেয়ে বেশি rating পাওয়া রেস্টুরেন্টের নাম খুঁজে বের করে সেটি Uppercase করে Return করবে।

// Input
// একটি Array of Object, যেমনঃ 
// [{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]

// Output
// সবচেয়ে বেশি rating পাওয়া রেস্টুরেন্টের নাম, Uppercase করে (toUpperCase() ব্যবহার করে)।

// Challenge
// Input Array না হলে, অথবা Array Empty হলে, "Invalid" রিটার্ন করবে।

// টিপস: Array এর মধ্য দিয়ে loop চালিয়ে এখন পর্যন্ত সবচেয়ে বেশি rating পাওয়া রেস্টুরেন্ট ট্র্যাক করো।

// Sample Test Cases
// Input
// Output
// [{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]
// SULTAN'S DINE
// [{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]
// PIZZA HUT
// []
// Invalid
// "restaurants"
// Invalid


// Starter Code:
function topRatedRestaurant(restaurants) {
    
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid" ;

    }

    let highrating = restaurants[0];

    for(let i=0 ;i<restaurants.length; i++)
        if(highrating.rating<restaurants[i].rating){
            highrating= restaurants[i];
        }

        return highrating.name.toUpperCase();
}    

console.log(topRatedRestaurant( [{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]))