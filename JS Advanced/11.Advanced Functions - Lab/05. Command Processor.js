function solve(){
    let str = '';
    return{
        append: (input) => {str += input},
        removeStart: (number) => {str = str.slice(number)},
        removeEnd: (number) => {str = str.slice(0,-number)}, 
        print: () => {console.log(str);}
    }
}
let secondZeroTest = solve();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

