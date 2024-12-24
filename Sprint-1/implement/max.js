function findMax(elements) {
//given an empty array, returns -Infinity
    if (elements.length === 0) {
        return -Infinity
//given an array with one number, returns that number
    } else if (elements.length === 1 && typeof elements[0] === "number")
        return elements[0];
}

const elements = [1];
console.log(findMax(elements));

module.exports = findMax;
