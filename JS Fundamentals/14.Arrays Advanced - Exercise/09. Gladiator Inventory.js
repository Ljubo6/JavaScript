function gladiatorInventory(array) {
    let currentArray = array.shift().split(" ");
    for (let el of array) {
        let currentElementArray = el.split(" ");
        let command = currentElementArray[0];
        let equipment = currentElementArray[1];
        if (command === "Buy") {
            if (!currentArray.includes(equipment)) {
                add(currentArray,equipment);
            }
        }else if(command === "Trash"){
            if (currentArray.includes(equipment)) {
                let index = currentArray.indexOf(equipment);
                currentArray.splice(index,1);
            }
        }else if(command === "Repair"){
            if (currentArray.includes(equipment)) {
                let index = currentArray.indexOf(equipment);
                currentArray.splice(index,1);
                add(currentArray,equipment);
            }
            
        }else if(command === "Upgrade"){
            let currentElement = equipment.split("-");
            let currentEquipment = currentElement[0];
            let upgrade = currentElement[1];
            if (currentArray.includes(currentEquipment)) {
                let index = currentArray.indexOf(currentEquipment);
                currentArray.splice(index + 1,0,`${currentEquipment}:${upgrade}`)
            }
        }
        
    }
    console.log(currentArray.join(" "));
    function add(currentArray,equipment){
        currentArray.push(equipment);
        return currentArray;
    }
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

);