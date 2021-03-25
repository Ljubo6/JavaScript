
function solve(input) {
    let key = Number(input.shift())
    let line = input.shift()

    while (line != 'end') {
        let temp = ''
        for (let char of line) {
            char = (char.charCodeAt() - key)
            temp += String.fromCharCode(char)
        }
        let pattern = /@([A-Za-z]+)[^@\-\!\:\>]+!([GN])!/
        let match = temp.match(pattern)
        if (match) {
            if (match[2] == 'G') {
                console.log(match[1])
            }
        }
        line = input.shift()
    }

}
// solve([
//     '4',
//     '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
//     '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
//     ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
//     "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
//     'DReh}e=<4lhzj1%K%',
//     'end'
// ])
solve([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
])