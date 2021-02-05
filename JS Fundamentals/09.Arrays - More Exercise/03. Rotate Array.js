function solve(array){
    let amount = Number(array.pop());
    for (let i = 0; i < amount; i++) {
        let element = array.pop();
        array.unshift(element);
        
    }
    if (Number.isNaN(amount)) {
        console.log("Empty");
        
    } else {
        console.log(array.join(" "));
    }
    
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);