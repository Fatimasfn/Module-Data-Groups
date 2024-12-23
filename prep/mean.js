function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  } return total / list.length;
};

function calculateMedian(list) {
    const sorted = [...list].sort((a, b) => a - b);
    console.log(sorted);
    const middleIndex = Math.floor(sorted.length / 2);
    // check if its odd
    if (sorted.length % 2 != 0){
    //console.log(middleIndex)
          let median = sorted[middleIndex]
            return median;
    //check if array length is even
    } else {
    let middleItem1 = sorted[middleIndex - 1]
    let middleItem2 = sorted[middleIndex]
        let median = (middleItem1 + middleItem2) / 2;
    return median;
    }
}

const salaries = [20, 20, 30, 10, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);

console.log(salaries, "<--- salaries input before we call calculateMean");



