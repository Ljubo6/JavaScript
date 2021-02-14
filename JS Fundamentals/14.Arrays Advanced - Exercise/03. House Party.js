function houseParty(array){
    let persons = [];
    for (const element of array) {
        let currentArray = element.split(" ");
        let name = currentArray[0];
        if (currentArray.includes("not")) {
            if(persons.includes(name)){
                persons.splice(persons.indexOf(name),1);
            }else{
                console.log(`${name} is not in the list!`);
            }
            
        }else{
            if(!persons.includes(name)){
                persons.push(name);
            }else{
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(persons.join("\n"));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);