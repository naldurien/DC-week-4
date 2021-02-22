function palindrome(word) {
  reverse = ""
  for (let index = word.length-1; index >=0; index--) {
    reverse += word[index];
  }
  if (reverse == word) {
    console.log("Your word is a palindrome.");
  }
  else if (reverse != word) {
    console.log("Your word is not a palindrome.")
  }
}
