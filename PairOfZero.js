let array = [1,2,3,4,-1,3];


function findPairSum(array) {

    let finalObject = {};
  
    for (let i = 0; i < array.length; i++) {
  
      let negativeVal = array[i] - array[i] * 2;
  
      if (array.includes(negativeVal)) {
  
        finalObject[i] = array[i];
  
        finalObject[array.indexOf(negativeVal)] = negativeVal;
  
        break;
  
      }
  
    }
  
    return finalObject;
  
  }

  console.log(findPairSum(array));