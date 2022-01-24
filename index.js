
function flipItAndReverseIt(word) {

  // make string into an array with .split('')
  // .reverse() that array, then .join to make the elements of the array a concatonated string in reverse of the original then use the flipit function with the parameter of word and if its equal to the reversed variable
return word.split("").reverse().join("");
}
function isPalindrome(word) {
  
const newlyReversedWord = flipItAndReverseIt(word);

return word === newlyReversedWord;
}
 

/* 
in order to start, we need to take the string and make it into an array so we can call array methods on it. the method for that is .split () or we could use spread operator as well but can spread operator be used on a non object? lets gor .split

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
