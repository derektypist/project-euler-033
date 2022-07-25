// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${digitCancellingFractions()} <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to Simplify Fraction - Returns an Array
function simplifyFrac(denom,num) {
    let sDenom = denom, sNum = num;
    for (let i=2;i<10;i++) {
        if (sDenom % i === 0 && sNum % i === 0) {
            sDenom /= i;
            sNum /= i;
            i = 2;
        }
    }
    return [sDenom,sNum];
}

// Function to Cancel Pair - Check if digit is cancelling
function cancelPair(denom,num) {
    const dDigits = [Math.floor(denom/10), denom%10];
    const nDigits = [Math.floor(num/10), num%10];
    if (dDigits.indexOf(0) > -1) {
        return false;
    } else if (dDigits[0] === nDigits[0]) {
        return [dDigits[1],nDigits[1]];
    } else if (dDigits[0] === nDigits[1]) {
        return [dDigits[1],nDigits[0]];
    } else if (dDigits[1] === nDigits[0]) {
        return [dDigits[0],nDigits[1]];
    } else if (dDigits[1] === nDigits[1]) {
        return [dDigits[0],nDigits[0]];
    } else {
        return false;
    }
}

/*
    Function to return the solution to the problem as described in
    https://projecteuler.net/problem=33
*/
function digitCancellingFractions() {
    let finalN = 1;
    let finalD = 1;
    for (let denom=11;denom<100;denom++) {
        for (let num=11;num<denom;num++) {
            const test = cancelPair(denom,num);
            if (!test) continue;
            if (num/denom === test[1]/test[0]) {
                finalN *= test[1];
                finalD *= test[0];
            }
        }
    }
    return simplifyFrac(finalD,finalN)[0];
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}