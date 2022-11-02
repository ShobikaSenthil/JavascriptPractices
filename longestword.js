//1st Approach
/* let elem ;
function findLongestWord(str) {
    var arr = str.split(' ');
    var max = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i].length > max){
        max = arr[i].length;
        elem = arr[i];
       }
    }
    return elem;
  }
  console.log(findLongestWord("Hello my name is Ankit Jain & i'm from Morena")); */

  //2nd Approach
  
  let arr = "Hello my name is Ankit Jain & i'm from Morena";
  let split = arr.split(" ");
  let longestword = split.reduce((accumulator,current)=>{
    if(current.length > accumulator.length)
    return current;
    else
    return accumulator;
    
  },"");
  console.log(longestword);