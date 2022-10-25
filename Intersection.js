

let arr1=[1,4,5,2,6,7];
let arr2=[1,2,9,7,8,6];
let count=0;
function intersection(arr1,arr2){
    let result=[];
    count++;
    for(let i=0;i<arr1.length;i++)
    {
        let currentElem=arr1[i];
        for(let j=0;j<arr2.length;j++)
        {
            count++;
            if(currentElem === arr2[j])
            {
                result.push(currentElem);
                break;
            }
        }
    }
    return result;
}
console.log(intersection(arr1,arr2),count);


