/* Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80, return 65. Otherwise, return 80. 

These instructions seem pretty weird, but ok, let's do what it says...*/

function sumOfInts(num1, num2) {
    sum = num1 + num2;
    if (sum >=50 && sum <=80) {
        return 65;
    }
    else {
        return 80
    }
}

