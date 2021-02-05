function solve(array) {
    let currentArray = [];
    let initialNum = 1;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        switch (command) {
            case "add":
                currentArray.push(initialNum);
                break;
            case "remove":
                currentArray.pop();
                break;
        }


        initialNum++;

    }
    if (currentArray.length === 0) {
        console.log("Empty");
    }else{
        console.log(currentArray.join(" "));
    }
    
}
solve(['remove', 'remove', 'remove']);