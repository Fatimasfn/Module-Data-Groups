
function sum(elements) {
// Given an empty array, return 0
    if (elements.length === 0) {
        return 0;

 // Given an array with one number, return that number
    } else if (elements.length === 1 && typeof elements[0] === "number") {
        return elements[0];

// Check if the array includes both numerical and non-numerical values
    } else {
// Collect only numerical values
        let numericalElement = [];
        elements.forEach((item) => {
            if (typeof item === "number") {
                numericalElement.push(item);
            }
        });

// If no numerical elements are found,"no numerical value exists"
            if (numericalElement.length === 0) {
                return  NaN;
            }
// Debugging output to check filtered values
        console.log(numericalElement); 

// Return the sum of all the numbers in the array
            let cumulative = 0
            numericalElement.forEach((item) => {
                cumulative += item
            });
        return cumulative
    }
}

console.log(sum(["cat", "dog", 1, 2]));

module.exports = sum;
