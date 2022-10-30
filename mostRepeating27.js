/*  Most occurent element and the occurence should be greater than half of the length of the array  */

// const arr = [3,2,3];
/* const arr = [2,2,1,3,1,1,2,2,3,3,3,3,3,3,3];
let length = arr.length / 2;

let obj = {};

for(let i of arr)
{
    if(obj.hasOwnProperty(i))
    {
        obj[i]++;
    }
    else{
        obj[i] = 1;
    }
}
console.log(obj);
for(let i in obj){
    if(obj[i] >= length)
    {
        console.log("@SS Most Repeating Number : ",i);
        break;
    }
} */

const arr = [2,2,1,3,1,1,2,2,3,3,3,3,3,3,3];
let length = arr.length / 2;

let obj = {};

for(let i of arr)
{
    obj[arr[i]] = obj[arr[i]]+1 || 1;
}
console.log(obj);
for(let i in obj){
    if(obj[i] >= length)
    {
        console.log("@SS Most Repeating Number : ",i);
        break;
    }
}