// Usage: node pyramid.js integer integer

// Program breaks if variable is not an empty string
var newAsterisk = "";

// Concatenates asterisks with a given "numb"(er)
function concatAsterisk(numb) {
    for (var i = 0; i < numb; i++) {
        newAsterisk = newAsterisk + "*";
    }
}

// Prints a sideways asterisk pyramid to the terminal of given height
function pyramid (peakNum) {
    peakNum = numb;

    // iterates "numb" many times, printing additional asterisks on each row to "numb" height
    for (var i = 0; i < peakNum; i++) { 
        concatAsterisk(i/i);
        
        // omits printing the 1st case of the empty string
        if (i>0) {
            console.log(newAsterisk);
        }
    }

    // iterates numb-1 times, printing 1 less asterisk per row
    for (var i = numb; i > 0; --i) {
        newAsterisk = "";
        concatAsterisk(i);
        console.log(newAsterisk);
    }
}

//Checks that terminal inputs are numbers that are integers
//TO DO: Find out if checking inputs for numbers is redundant

//1st condition checks for 4 command line arguments (CLA)
if (process.argv[3] != undefined) {

    //2nd condition checks CLA 3 and CLA 4 for numbers and integers in that case
    // exits with error code without
    //TO DO: add different error codes and document
    if (isNaN(process.argv[2]) == true || isNaN(process.argv[3]) == true || Number.isInteger(Number(process.argv[2])) == false || Number.isInteger(Number(process.argv[3])) == false) {
        console.log("\nEnter an integer after running pyramid.js");
        console.log("to display a sideways pyramid");
        console.log("with a random height up to that entered.\n");
        console.log("Enter a second integer to specify that height.\n");
        console.log("Usage: node pyramid.js integer");
        console.log("            OR");
        console.log("Usage: node pyramid.js integer integer\n");
        return 1;
    }
} else {
    //In case there's no 4th, checks the 3rd CLA for number and integer
    // exits without
    if (isNaN(process.argv[2]) == true || Number.isInteger(Number(process.argv[2])) == false) {
        console.log("\nEnter an integer after running pyramid.js");
        console.log("to display a sideways pyramid");
        console.log("with a random height up to that entered.\n");
        console.log("Enter a second integer to specify that height.\n");
        console.log("Usage: node pyramid.js integer");
        console.log("            OR");
        console.log("Usage: node pyramid.js integer integer\n");
        return 1;
    } 
}

// TO DO: rename/replace all instances of "numb"
// Not descriptive enough

// If there's a 4th CLA, sets "numb" to it
if (process.argv[3] != undefined) {
    var numb = process.argv[3];
    // else if there's a 3rd CLA, sets "numb" 
    // to a random integer with a max given by user
} else if (process.argv[2] != undefined) {
    var numb = Math.floor(Math.random() * process.argv[2]);
} else {

    // without CLA 3, exits with error message
    // TO DO: update error code and number
    console.log("\nEnter an integer after running pyramid.js");
    console.log("to display a sideways pyramid with a height");
    console.log("that could be as high as that entered.\n");
    console.log("Enter a second integer to specify that height.\n");
    console.log("Usage: node pyramid.js integer");
    console.log("            OR");
    console.log("Usage: node pyramid.js integer integer\n");
}

pyramid();

//TO DO: Refactor the Error Message into a function 
//Currently Broken

// function pyramidUsage() {
//         console.log("Enter an integer after running pyramid.js");
//         console.log("to display a sideways pyramid");
//         console.log("with a random height up to that entered.\n");
//         console.log("Enter a second integer to specify that height.\n");
//         console.log("Usage: node pyramid.js integer");
//         console.log("            OR");
//         console.log("Usage: node pyramid.js integer integer");
//         return 1;
// }

// Used to debug cases:

// console.log(isNaN(process.argv[2]));
// console.log(isNaN(process.argv[3]));
// console.log(Number.isInteger(Number(process.argv[2])));
// console.log(Number.isInteger(Number(process.argv[3])));