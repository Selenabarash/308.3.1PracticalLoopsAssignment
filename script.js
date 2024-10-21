// FizzBuzz using for Loop 
// part 1
for (let fBuzz = 1; fBuzz <= 100; fBuzz++) {
    if (fBuzz % 3 === 0 && fBuzz % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (fBuzz % 3 === 0) {
        console.log("Fizz");
    } else if (fBuzz % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(fBuzz);
    }
}

// why is nothing appearing on my console 

//part two

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // If no divisors found, it's prime
}

// Declare an arbitrary number
let n = 9; // You can change this value to test with different numbers

// Start searching for the next prime number
let nextPrime = n;

while (true) {
    if (isPrime(nextPrime)) {
        console.log(`The next prime number after ${n} is ${nextPrime}`);
        break; // Exit the loop once we find the prime number
    }
    nextPrime++; // Increment to check the next number
}

// part 3 

// CSV data string
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Function to parse the CSV string
function parseCSV(data) {
    let cell = ''; // Variable to hold the current cell
    const rows = []; // Array to hold all rows

    // Loop through each character in the data string
    for (let i = 0; i < data.length; i++) {
        const char = data[i];

        // Check for a comma to identify the end of a cell
        if (char === ',') {
            cell += ''; // End of current cell, do nothing, will log later
        } 
        // Check for new line to identify the end of a row
        else if (char === '\n') {
            rows.push(cell); // Push the completed cell to rows
            console.log(rows.join(', ')); // Log the current row
            rows.length = 0; // Clear the rows array for the next row
            cell = ''; // Reset cell for new row
        } 
        // Otherwise, keep adding characters to the current cell
        else {
            cell += char; // Accumulate characters into the cell
        }
    }

    // Log the last cell after exiting the loop, if there's any
    if (cell) {
        rows.push(cell);
        console.log(rows.join(', '));
    }
}

// Call the function with the CSV data
parseCSV(csvData);
