/*
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
*   non-alphanumeric characters, it reads the same forward and backward.
    Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.

###  Test cases

Input: s = "race a car"
raceacar
Output: false
Explanation: "raceacar" is not a palindrome.
    * */
function isPalindrome(s: string): boolean {
    const word =  s.toLowerCase().replace(/\s+/g, '');
    for (let index = 0; index < word.length / 2; index++) {
        if(word[index] !== word[word.length -1 -index]) return false
    }

    return true;
};

console.log(isPalindrome('aba'));
console.log(isPalindrome('Race a car'));
console.log(isPalindrome('Race  car'));

