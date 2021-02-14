function solve(array,commandArray) {
    for (let elements of commandArray) {
        let el = elements.split(" ");
        let command = el[0];
        if (command === "add") {
            let index = Number(el[1]);
            let element = Number(el[2]);
            add(array,index,element);

        }else if(command === "addMany"){
            let index = Number(el[1]);
            for (let i = 2; i < el.length; i++) {
                
                add(array,index,Number(el[i]));
                index++;
            }
        }else if(command === "remove"){
            let index = Number(el[1]);
            remove(array,index);
        }else if(command === "contains"){
            let element = Number(el[1]);
            console.log(contains(array,element)); 
        }else if(command === "shift"){
            let position = el[1];
            shift(array,position);
        }else if(command === "sumPairs"){
            array = sumArrayPairs(array);
        }else if("print"){
            break;
        }


        function add(array,index,element){
            array.splice(index,0,element);
            return array;
        }
        function remove(array,index){
            array.splice(index,1);
            return array;
        }
        function contains(array,element){
            if(array.includes(element)){
                return array.indexOf(element);
            }else{
                return -1;;
            }
        }
        function shift(array,position){
            for (let i = 0; i < position; i++) {
                let num = array.shift();
                array.push(num);
                
            }
            return array;
        }
        function sumArrayPairs(array){
            let currentArray = [];
            for (let i = 0; i < array.length - 1; i += 2) {
                
                currentArray.push(array[i] + array[i + 1]);
            }
            if (array.length % 2 !== 0) {
                currentArray.push(array[array.length - 1]);
            }
            return currentArray;
        }
    }
    console.log(`[ ${array.join(", ")} ]`);
}
solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    );