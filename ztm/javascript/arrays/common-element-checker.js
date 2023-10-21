const commonElementChecker = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}


const containsCommonElement = (arr1, arr2) => {
  let map = {};
  for(let i = 0; i < arr1.length; i++){
    map[arr1[i]] = (map[arr1[i]] || 0) + 1;
  }
  for(let i = 0; i < arr2.length; i++){
    if(map[arr2[i]]) return true;
  }
  return false;
}

const containsCommonElementSome = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
}


const runTests = (f) => {
  const arr1 = ['a', 'b', 'c', 'd', 'z'];
  const arr2 = ['x', 'y', 'i'];
  const arr3 = ['x', 'y', 'z'];
  console.log(f(arr1, arr2));
  console.log(f(arr1, arr3));
}

runTests(containsCommonElementSome);
