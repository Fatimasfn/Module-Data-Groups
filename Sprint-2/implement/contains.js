function contains(object, propertyName) {
    const keys = Object.keys(object); 
    //console.log(keys); //debugging
     return keys.includes(propertyName);
}

const book = {a: 1, b: 2}
console.log(contains(book, "a"));

module.exports = contains;
