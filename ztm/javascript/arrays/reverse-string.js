const reverseUsingReduce = (str) => {
  if(!str || str.length < 2 || typeof str !== 'string') return 'Invalid input';
  return str.split('').reduce((reversed, letter) => letter + reversed, '');
}

const reverseUsingFor = (str) => {
  if(!str || str.length < 2 || typeof str !== 'string') return 'Invalid input';
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}

const reverseUsingForeach = (str) => {
  if(!str || str.length < 2 || typeof str !== 'string') return 'Invalid input';
  let reversed = '';
  str.split('').forEach((letter) => reversed = letter + reversed);
  return reversed;
}

const runTests = (f) => {
  console.log(`'Hello' -> ${f('Hello')}`);
  console.log(`'My name is Dimi' -> ${f('My name is Dimi')}`);
  console.log(`'1' -> ${f(1)}`);
  console.log(`'null' -> ${f(null)}`);
  console.log(`'a' -> ${f('a')}`);
}

runTests(reverseUsingForeach);