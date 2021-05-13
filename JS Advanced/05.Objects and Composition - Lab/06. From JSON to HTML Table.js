function solve(input) {
    let symbolsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&#39;'
    };

    function escapeSymbols(text) {
        return text
            .split("&").join(symbolsToReplace["&"])
            .split("<").join(symbolsToReplace["<"])
            .split(">").join(symbolsToReplace[">"])
            .split("\"").join(symbolsToReplace["\""])
            .split("\'").join(symbolsToReplace["'"])
    }

    let students = JSON.parse(input);
    let first = students[0];

    let html = '<table>\n';

    html += `\t<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>\n`;
    students.forEach(student => {
        html += '\t<tr>';
        html += Object.values(student).map(x => `<td>${isNaN(x) ? escapeSymbols(x) : x}</td>`).join('');
        html += '</tr>\n';
    });
    html += '</table>';

    return html;
}



console.log(solve('[{"Name":"Pesho","Score": 4,"Grade": 8},{"Name": "Gosho","Score": 5,"Grade": 8},{"Name": "Angel","Score": 5.50,"Grade": 10}]'
));