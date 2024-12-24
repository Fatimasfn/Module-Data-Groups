module.exports = dedupe;


function dedupe(list) {
//given an empty array, it returns an empty array
        if (list.length === 0 ) {
            return list 
//given an array with no duplicates, it returns a copy of the original array
        } else if (list.length !== 0){
          for (let i = 0; i < list.length; i++) {
             for (let j = i + 1; j < list.length; j++) {
                if (list[i] === list[j]) {
                        return`duplicate found at index ${j} with value ${list[j]}`
                } 
              }                                                                                               
          }
        } return [...list];       
}

console.log(dedupe(['a','b','c','a']));