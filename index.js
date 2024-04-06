function isPalindrome(word) {
  let wordArray = []
  wordArray = [...word]
  let reverseWordArray = []
  for (let i = wordArray.length - 1; i>=0; i--) {
    reverseWordArray.push(wordArray[i]);
  }
  let reversedWord = reverseWordArray.reduce((acc, char) => acc + char,"")
  if (reversedWord.toLowerCase() === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

/* 
  takes 'word.tolowercase()' and breaks it into an array of individual characters (spread operator)
  calculate total number of letters in array
  concactonate each letter in reverse order into a new string variable 'reversedWord'
  does reversedWord.tolowercase() === word.tolowercase()? then true
  else false
  Add your pseudocode here
*/

/*
  line 2. creates an empty array for the characters of the word
  line 3. spreads a string into said empty array
  line 4. creates an empty array for reversed word
  line 5. sets up a loop for # of iterations based on length of word; i gets 1 smaller until it reaches 0.
  lines 6-7. pushes characters into reverse word array
  line 8. concatonates the characters in reverse word arrau
  lines 9-13. true false test for whether or not the word is a palindrome 
*/

// There is another way to make this code more compact. the reduce function can add things in the reverse order.
// this would make the loop redundant, as we can simply skip that step after spreading the initial word
//this would have saved us... 3 lines of code?

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
