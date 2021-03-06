function solve(array){
    let task = {};
    for (let i = 0; i < array.length - 1; i+=2) {
        let resource = array[i];
        let quantity = Number(array[i + 1]);
        if(task.hasOwnProperty(resource)){
            task[resource] += quantity;
        }else{
            task[resource] = quantity; 
        }
          
    }
    for (let key in task) {
        console.log(`${key} -> ${task[key]}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    );