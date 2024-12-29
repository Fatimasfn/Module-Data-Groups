
//tally takes a list of items and count the frequency of each item in an array
function tally(arr) {
    const frequency = {};
    if (arr.length === 0){
        return {};
    // Given an invalid input like a string, throw error
    } else if(!Array.isArray(arr)){
        return "Input needs to be an array"
    }else {
    // for each item in arr log frequency
        for (const item of arr) {
    // if item exist in the object frequency,truthy
            if (frequency[item]) {
                frequency[item] += 1; 
            } else {
    // Initialize the count to 1 for a new item
            frequency[item] = 1; 
            }
        } return frequency;
}}

books = ["a", "b", "c", "a"]; 
books2 = []
console.log(tally(books2)); // target output: { a : 2, b: 1, c: 1 }



module.exports = tally;
