function solve(array) {
    let output = [];
    let obj = {
        add: (string) => { output.push(string) },
        remove: (string) => { output = output.filter(x => x !== string) },
        print: () => { console.log(output.join(',')); }
    }
    array.forEach(element => {
        if (element == 'print') {
            obj.print()
        } else {
            let [action, item] = element.split(' ');
            obj[action](item);
        }

    })   
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])