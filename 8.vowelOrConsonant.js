//8. Write a javascript program using function to input any alphabet and check whether it is vowel or consonant.

function checkVowelOrConsonant(x) {
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
    return "it's a Vowel";
  } else {
    return "Consonant";
  }
}
let char = "k";
let answer = checkVowelOrConsonant(char);
console.log("answer = ", answer);
