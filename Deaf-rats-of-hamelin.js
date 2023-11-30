/*
The Pied Piper has been enlisted to play his 
magical tune and coax all the rats out of town.
But some of the rats are deaf and are going the wrong way!
How many deaf rats are there?

Legend:
  P = The Pied Piper
  O~ = Rat going left
  ~O = Rat going right

Example:
  ex1 ~O~O~O~O P has 0 deaf rats
  ex2 P O~ O~ ~O O~ has 1 deaf rat
  ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/


// Solution

let countDeafRats = function(town) {
  let deafs = 0
  let ident = '0'
  for (let i = 0; i < town.length; i++) {
    if (town[i] === 'P') {
      ident = '~'
    }
    if (town[i] === ident) {
      deafs++
    }
    if (town[i] === '~' || town[i] === '0') {
      i++
    }
  }
  return deafs;
}

// or

let deafRatsCount = function(town) {
  let deafRats = 0;
  const townArr = 
    town.split(' ')
    .join('')
    .split('')
    .reduce((a,b,i) => {
      return i%2 !== 0 && b === '~' ? deafRats++ : deafRats
    });
  return deafRats
}