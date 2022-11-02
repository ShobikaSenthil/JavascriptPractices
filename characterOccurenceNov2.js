/* Algorithm for 1st approach
1.Get the string and pass the string as the argument to the function
2.In that function, check whether the string is valid or not
3.Change the string to lowercase and split the string by using empty string and create an object
4.Iterate the string and use hasOwnProperty to check whether the character is present or not
5.If it is not occured,assign 1 otherwise increase the count.
6.return the object 
*/

/* const str = "ShobikaSenthil";
function findCharacterOccurence(str)
{
    if(typeof str === "string")
    {
    const lower =str.toLowerCase();
    const split = lower.split("");
    let obj={};
    for(let i=0;i<split.length;i++)
    {
        if(obj.hasOwnProperty(split[i]))
        {
            obj[split[i]]++;
        }
        else{
            obj[split[i]] = 1;
        }
    }
    return obj;
    }
    else{
        return `Invalid String..Check the input..`;
    }
}
console.log(findCharacterOccurence(str)); */


//2nd Approach - By using "reduce method"
const str1 = "ShobikaSenthil";
function findCharacterOccurence(str1)
{
    if(typeof str1 === "string")
    {
    const lower = str1.toLowerCase();
    const split = lower.split("");
    const characterOccurence = split.reduce((accumulator,current)=>{
        if(accumulator.hasOwnProperty(current))
        {
            accumulator[current]++;
        }
        else{
            accumulator[current] = 1;
        }
        return accumulator;
    },{});
    return characterOccurence;
    }
    else{
        return "Invalid Input..Please check the input...";
    }   
}

console.log(findCharacterOccurence(str1));

//3rd Approach - By using for Of
/* const str3 = "ShobikaSenthil";
function findCharacterOccurence(str)
{
    if(typeof str === "string")
    {
    const lower =str.toLowerCase();
    const split = lower.split("");
    let obj={};
    for(let item of split)
    {
        if(obj.hasOwnProperty(item))
        {
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    }
    return obj;
    }
    else{
        return `Invalid String..Check the input..`;
    }
}
console.log(findCharacterOccurence(str3)); */


//4th Approach
/* const str4 = "ShobikaSenthil";
function findCharacterOccurence(str)
{
    if(typeof str === "string")
    {
    const lower =str.toLowerCase();
    const split = lower.split("");
    let obj={};
    split.forEach((item) => {
        if(obj.hasOwnProperty(item))
        {
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    });
    return obj;
    }
    else{
        return `Invalid String..Check the input..`;
    }
}
console.log(findCharacterOccurence(str4)); */




