function solve(array) {
    let input = array.shift();
    let output =[];
    while (input !== 'end') {
        let result  = input.split(":");
        let char = result[0];
        let indexes = result[1].split("/").map(Number);
        for (let i = 0; i < indexes.length; i++) {
            
            output[indexes[i]] = char;
        }
        input = array.shift();
    }
    console.log(output.join(""));
}
solve([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
  ]);