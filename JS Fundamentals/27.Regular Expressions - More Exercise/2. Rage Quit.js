function solve(input) {
    for (let str of input) {
        let pattern = /[^\d]+/g;
        let patternDigit = /\d+/g;
        let result = [];
        let uniqueSymbols = [];
        let match = str.match(pattern).map(x => x.toUpperCase());
        let matchDigit = str.match(patternDigit).map(Number);
        for (let i = 0; i < match.length; i++) {
            result[i] = match[i].repeat(matchDigit[i]);

        }
        let string = result.join("");
        for (let i = 0; i < string.length; i++) {
            if (!uniqueSymbols.includes(string[i])) {
                uniqueSymbols.push(string[i]);
            }
        }
        console.log(`Unique symbols used: ${uniqueSymbols.length}`);
        console.log(string);
    }


}
solve(['aSd2&5s@1'])