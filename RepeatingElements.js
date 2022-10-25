/* const arr=[1,2,3,2,1];
const min = 0;
const minElem = 0;
let minimumValue=0;
let minimumElement;
for(let i=0;i<arr.length;i++)
{
    let x=arr[i];
    let min=0;
    for(let j=i+1;j<arr.length;j++)
    {
        if(x === arr[j])
        {
            min = j-i;
            minElem = x;
        }
    }
if(minimumValue < min)
{
    minimumValue = min;
    minimumElement = minElem;
}


}

console.log(minimumElement); */

// for(let k=0;k<min.length;k++)
// {

// }
// min.sort();

/* const arr=[1,2,3,2,1];

const obj={
   
}

for(let i=0;i<arr.length;i++)
{
    let temp=arr[i];
    let j=0;
    if(temp === arr[j])
    {
        firstIndex = i;
        repeatedIndex = j;

        dif = j-i;
        element = temp;
    }
    else{
        continue;
    }
    j++;

    
} */


const obj={
    1:true,
    2: true,
    3:true,
    
};

const arr=[1,2,3,2,1];

for(let i=0;i<obj.length;i++)
{
    let s=arr[i];
    if(obj.hasOwnProperty(s))
    {
    
    }
}
