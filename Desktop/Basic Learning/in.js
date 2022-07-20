function secondLargest(array) {
    let largestNum = array[0];
    let secondLargestNum = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNum) {
        secondLargestNum = largestNum;
        largestNum = array[i];
      } else if (array[i] !== largestNum && array[i] > secondLargestNum) {
        secondLargestNum = array[i];
      }
    }
    // console.log("Largest Number in the array is " + largestNum);
    // console.log(secondLargestNum);
    return secondLargestNum;
    // Write your code here
  }

  

  function calculateFrequency(string) {
    var temp = {};                

    var length = string.length;

    for(var i=0;i<length;i++){
        code = string.charCodeAt(i);
        if(temp.hasOwnProperty(string[i])==false && (code > 96 && code < 123)){
            var count = 0;

            for(var j=i; j<length; j++){
                if(string[i] == string[j]){

                    count++;
                }
            }           
            temp[string[i]] = count;
        }            
    }
    return temp;
}




function flatten(unflatObject) {
    let finalObj = {};
	
    for (let i in unflatObject) {      

      if ((typeof unflatObject[i]) == 'object') {     // if key itself is an object
        let flatObject = flatten(unflatObject[i]);             // recursively call with that keyobj
        for (let x in flatObject) {          

          finalObj[i + '.' + x] = flatObject[x];
        }
      } else {                                        // otherwise put in final object
        finalObj[i] = unflatObject[i];
      }
    }
    return finalObj;
    
}



function unflatten(flatObject) {
    var result = {}, temp, splitItems, key;
      for (key in flatObject) {
          splitItems = key.split('.');
          temp = result;          // reference to result
          for (var i = 0; i < splitItems.length - 1; i++) {
              if (!(splitItems[i] in temp)) {
                  if (typeof splitItems[i + 1] === 'number') { 
                      temp[splitItems[i]] = [];      
          a        } else {
                      temp[splitItems[i]] = {};      
                  }
              }
              temp = temp[splitItems[i]];
          }
          temp[splitItems[splitItems.length - 1]] = flatObject[key];
      }
      return result;
  }