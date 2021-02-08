function palindrome(arr){
    function isPalindrome(n){
        let reversedN = n.toString().split('').reverse().join('');
        return Number(reversedN) === n ? true : false;
    }
    let printLine = '';
    for (const n of arr) {
        printLine += isPalindrome(n) + '\n';
    }
    return printLine;
}
let result = palindrome([123,323,421,121]);
console.log(result);