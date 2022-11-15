

let arr = [1, 2, 3, 4];

Array.prototype.customFilter = function (callBack) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = callBack(this[i]);
    if (result) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

const newArray = arr.customFilter((item) => item%3===0);
console.log("NewArray :", newArray);