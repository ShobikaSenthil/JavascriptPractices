/* 1.Get a string and pass to the function
2.Validate whether the input is string or not
3.Change the string to uppercase and initialise the count = 1
4.Create an empty string and iterate each letter in a string
5.If first letter is equal to the next element,increase the count else add the letter and count to the result string.
6.Then initialize the count to 1.
7.Print the new String*/


const str = "AAAABBBCCDAABB";

function checkLetterAndCount(str) {
    if (typeof str === "string") {
        const upperCase = str.toUpperCase();
        let count = 1;
        let result = "";
        for (let i = 0; i < upperCase.length; i++) {
            if (upperCase[i] === upperCase[i + 1]) {
                count++;
            }
            else {
                result += upperCase[i] + count;
                count = 1;
            }
        }
        return result;
    }
    else {
        return "Invalid input...";
    }
}
console.log(checkLetterAndCount(str));

