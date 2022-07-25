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