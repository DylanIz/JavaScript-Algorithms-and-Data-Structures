const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
};

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
      if (counts[el]) {
          counts[el]++;
      } else {
          counts[el] = 1;
      }
    })
    return counts;
}

/*
const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
    if(array.length % 2 === 0){
        const firstMiddleNumber = sorted[sorted.length / 2];
        const secondMiddleNumber = sorted[sorted.length / 2 - 1];
        return evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
    } else{
        return oddListMedian = sorted[Math.floor(sorted.length / 2)];
    }
};
*/

/*
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const firstMiddleNumber = testArr2[testArr2.length / 2];
const secondMiddleNumber = testArr2[testArr2.length / 2 - 1];
const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
console.log(evenListMedian);
*/

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
