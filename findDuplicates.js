const nums = [21, 30, 21, 40, 15, 17, 15, 25, 10, 21]

// write a function to find dupliucates and return 

const getDupicates = (nums) => {

  let unique = new Set();
  let result = new Set();

  for(let num of nums){
    if(!unique.has(num)) {
      unique.add(num);
    }
    else{
      result.add(num);
    }
  }
  return result;
}

console.log("duplicate elements :", getDupicates(nums));