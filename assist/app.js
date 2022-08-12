
// =======================name+gender===========================


let person = prompt("Please enter your name", "Full Name");

let gender = prompt("Please enter your gender", "male or female");

// =======================age===========================

let age = prompt("how old are you?");
while (age <= 0) {
    alert("Please enter your age!");
    age = prompt("how old are you?");
}
// ======================= yes no Q ===========================


let q1 = prompt("are you like classic cars ? ", "yes or no");
if (q1.length === 0) {
    console.log('invaild');
} else {
    console.log(q1);
}

let q2 = prompt("are you live in zarqa ? ", "yes or no");
if (q2.length === 0) {
    console.log('invaild');
} else {
    console.log(q2);
}

let q3 = prompt("are you ready to join in our website ? ", "yes or no");
if (q3.length === 0) {
    console.log('invaild');
} else {
    console.log(q3);
}

let qqq = [q1, q2, q3]
console.log(qqq);


// =======================rate us===========================


let rate = prompt("please rate us ", "from 1 to 5 1 is min 5 is max");

switch (rate) {
    case "1":
        alert("thank you " + person + " for rating us [*]");
        break;
    case "2":
        alert("thank you " + person + " for rating us [**]");
        break;
    case "3":
        alert("thank you " + person + " for rating us [***]");
        break;
    case "4":
        alert("thank you " + person + " for rating us [****]");
        break;
        case "5":
            alert("thank you "+ person +" for rating us [*****]");
            break;

    default:
        alert("thank you");

        break;
}

// =======================wlc msg===========================

let wlc 
if (confirm("Do you want to view welcome message?")) {
    if (gender == 'male') {
        alert("Welcome, MR. " + person);
    }
    else if (gender == 'female') {
        alert("Welcome, MS. " + person);
    }
    else {
        alert(" Welcome, " + person);
    }
}

else  {
}











