function solve(array) {
    let arr = array.shift().split(" ").map(Number);
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(" ");
        let command = elements[0];
        let firstNum = Number(elements[1]);
        let secondNum = Number(elements[2]);

        switch (command) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum);
                break;
            case "Insert":
                insert(firstNum,secondNum)
                break;

            default:
                break;
        }

    }
    printArr(arr);

    function printArr(arr){
        return console.log(arr.join(" "));
    }
    function add(el){
        arr.push(el);
    }
    function remove(num){
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index){
        arr.splice(index,1)
    }
    function insert(num,index){
        arr.splice(index,0,num);
    }

}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);