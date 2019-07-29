var newAsterisk = "*";

var numb = Number(process.argv[2]);

function concatAsterisk(numb) {

    for (var i = 0; i < numb; i++) {
        newAsterisk = newAsterisk + "*";
    }
    
}



function pyramid (peakNum) {
    peakNum = numb;

    // for (var i = 0; i < peakNum; i++) {
    //     concatAsterisk(i);

    // } 

    for (var i = 0; i < peakNum; i++) {
        concatAsterisk(i/i);
        console.log(newAsterisk);
    }
    //console.log(newAsterisk);

    // for (var i = peakNum; i > 0; --i) {
    //     concatAsterisk(-i);
    //     console.log(newAsterisk);
    // }

}

//console.log(process.argv[2]);


pyramid();



// for (var j = 0; j < peakNum; j++) {
//     console.log("*") +
// }