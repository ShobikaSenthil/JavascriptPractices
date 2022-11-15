let arr = [1, 2, 3, 4];
Array.prototype.customMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }
  return resultArray;
};

const newArray = arr.customMap((item)=> item * 9);
console.log("NewArray :", newArray);

