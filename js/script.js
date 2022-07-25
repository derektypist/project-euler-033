// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${digitCancellingFractions()} <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to Simplify Fraction
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