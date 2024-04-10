const side = {
    "menu": [
        { "side1": "Dashboard Kit" },
        { "side2": "Overview" },
        { "side3": "Tickets" },
        { "side4": "Ideas" },
        { "side5": "Contacts;" },
        { "side6": "Agents" },
        { "side7": "Articles" },
        { "side8": "Settings" },
        { "side9": "Subscription" },
    ]
};

const Author = {
    "employee": [
        { "firstName": "Jones Ferdinand" }
    ]
};

const main = {
    "menu2": [
        { "main1": "Unresolved" },
        { "main2": "70" },
        { "main3": "Overdue" },
        { "main4": "16" },
        { "main5": "Open" },
        { "main6": "43" },
        { "main7": "Onhold" },
        { "main8": "64" },
    ]
};

// side bar //
console.side('side: ', side);

let result1 = side.menu[0].side1;
console.log('result: ', result1);
const side1 = document.getElementsByspanclass("dashboard-title")
side1.innerHTML = result1;

let result2 = side.menu.side2;
console.log('result2: ', result2);
const side2 = document.getElementsByspan("  ")
side2.innerHTML = result2;

let result3 = side.menu.side3;
console.log('result3: ', result3);
const side3 = document.getElementsByspan("  ")
side3.innerHTML = result3;

let result4 = side.menu.side4;
console.log('result4: ', result4);
const side4 = document.getElementsByspan("  ")
side4.innerHTML = result4;

let result5 = side.menu.side5;
console.log('result5: ', result5);
const side5 = document.getElementsByspan("  ")
side5.innerHTML = result5;

let result6 = side.menu.side6;
console.log('result6: ', result6);
const side6 = document.getElementsByspan("  ")
side6.innerHTML = result6;

let result7 = side.menu.side7;
console.log('result7: ', result7);
const side7 = document.getElementsByspan("  ")
side7.innerHTML = result7;

let result8 = side.menu.side8;
console.log('result8: ', result8);
const side8 = document.getElementsByspan("  ")
side8.innerHTML = result8;

let result9 = side.menu.side9;
console.log('result9: ', result9);
const side9 = document.getElementsByspan("  ")
side9.innerHTML = result9;

//Profile name//
console.log('Author: ', Author);

let result10 = Author.employee.firstName;
console.log('result10: ', result10);
const firstName = document.getElementsByClass("profile-name  me-1")
firstName.innerHTML = result10;

//main//
console.log('main: ', main);

let result11 = main.menu2.main1;
console.log('result11: ', result11);
const main1 = document.getElementsByh6class("card-title gray-text mb-2")
main1.innerHTML = result11;

let result12 = main.menu2.main2;
console.log('result12: ', result12);
const main2 = document.getElementsByspanclass("card-info mb-0")
main2.innerHTML = result12;