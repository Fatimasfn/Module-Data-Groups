function findMax(elements) {
// Given an empty array, return -Infinity
    if (elements.length === 0) {
        return -Infinity;

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

// If no numerical elements are found, return -Infinity
            if (numericalElement.length === 0) {
                return  "no numbers exist in the array";
            }
// Debugging output to check filtered values
        console.log(numericalElement); 

// Return the maximum numerical value
        return Math.max(...numericalElement);
    }
}


const elements = [ "dog", "cat"];
console.log(findMax(elements)); // Output: 4

module.exports = findMax;
