var newAsterisk = "";

function pyramidUsage() {
        console.log("Enter an integer after running pyramid.js");
        console.log("to display a sideways pyramid");
        console.log("with a random height up to that entered.\n");
        console.log("Enter a second integer to specify that height.\n");
        console.log("Usage: node pyramid.js integer");
        console.log("            OR");
        console.log("Usage: node pyramid.js integer integer");
        return 1;
}

console.log(isNaN(process.argv[2]));
console.log(isNaN(process.argv[3]));
console.log(Number.isInteger(Number(process.argv[2])));
console.log(Number.isInteger(Number(process.argv[3])));

if (process.argv[3] != undefined) {
    if (isNaN(process.argv[2]) == true || isNaN(process.argv[3]) == true || Number.isInteger(Number(process.argv[2])) == false || Number.isInteger(Number(process.argv[3])) == false) {
        console.log("Enter an integer after running pyramid.js");
        console.log("to display a sideways pyramid");
        console.log("with a random height up to that entered.\n");
        console.log("Enter a second integer to specify that height.\n");
        console.log("Usage: node pyramid.js integer");
        console.log("            OR");
        console.log("Usage: node pyramid.js integer integer");
        return 1;
    }
} else {
    if (isNaN(process.argv[2]) == true || Number.isInteger(Number(process.argv[2])) == false) {
        console.log("Enter an integer after running pyramid.js");
        console.log("to display a sideways pyramid");
        console.log("with a random height up to that entered.\n");
        console.log("Enter a second integer to specify that height.\n");
        console.log("Usage: node pyramid.js integer");
        console.log("            OR");
        console.log("Usage: node pyramid.js integer integer");
        return 1;
    } 
}



if (process.argv[3] != undefined) {
    var numb = process.argv[3];
} else if (process.argv[2] != undefined) {
    var numb = Math.floor(Math.random() * process.argv[2]);
} else {
    console.log("Enter an integer after running pyramid.js");
    console.log("to display a sideways pyramid with a height");
    console.log("that could be as high as that entered.\n");
    console.log("Enter a second integer to specify that height.\n");
    console.log("Usage: node pyramid.js integer");
    console.log("            OR");
    console.log("Usage: node pyramid.js integer integer");
}

function concatAsterisk(numb) {
    for (var i = 0; i < numb; i++) {
        newAsterisk = newAsterisk + "*";
    }
}

function pyramid (peakNum) {
    peakNum = numb;

    for (var i = 0; i < peakNum; i++) { 
        concatAsterisk(i/i);
        
        if (i>0) {
            console.log(newAsterisk);
        }
    }

    for (var i = numb; i > 0; --i) {
        newAsterisk = "";
        concatAsterisk(i);
        console.log(newAsterisk);
    }
}

pyramid();