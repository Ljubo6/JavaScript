function train(input){
    let array = input.shift().split(" ").map(Number);
    let maxPeople = Number(input.shift());
   

    function editArray(input,array){
        for (let i = 0; i < input.length; i++) {
            let element = input[i].split(' ');
            let command = element[0];
            if (command === "Add") {
                let passengers = Number(element[1]);
                array.push(passengers);
            }else{
                let passengers = Number(command);
                for (let i = 0; i < array.length; i++) {
                    if (array[i] + passengers <= maxPeople) {
                        array[i] += passengers;
                        break;
                    }
                    
                }
            }    
        }
        return array;
    }
    console.log(editArray(input,array).join(" "));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

);