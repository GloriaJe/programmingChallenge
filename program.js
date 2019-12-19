/**
 * This function allows us to count the number of cycles needed to apply the 3n+1 problem.
 * If the number is even, we divide it by 2. If the number is odd we multiply it by 3 and add 1.
 * We stop when the number is equal to 1.
 * @param {} number 
 */
function process(number) {
    var nbCycles = 1;
    // We do this until the number is equal to 1
    while(number != 1) {
        // Even number : divided by two
        if (number%2 == 0) {
            number = number/2;
        // Odd number : multiplied by 3 and we add 1
        } else {
            number = number*3+1;
        }
        nbCycles++;
    }
    return nbCycles;
}

/**
 * In this function we calculate the number of cycles needed for each number between the numbers i and j set in the html form.
 * At the end we print the maximum number.
 */
function getMaxCycleLength() {
    var maximum = 0;
    var i = new Number(document.getElementById("i").value);
    var j = new Number(document.getElementById("j").value);
    console.log (" i : " + i + " j : " + j);    
    if(i > j) {
        alert("number i is supposed to be smaller than number j !");
    } else {
    // For each value between i and j, we use the function process to find the number of cycles needed
    // and we compare it to the current maximal value
    for(var count = i; count <= j; count ++) {
        nbCycles = process(count);
        if(nbCycles > maximum) {
            maximum = nbCycles;
        }
    }
    alert("The result is : " + maximum);
    } 
}
