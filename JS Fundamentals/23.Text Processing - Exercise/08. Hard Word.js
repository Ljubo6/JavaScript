function solve(input){
    let string = input[0];
    let array = input[1];
    let str = "";
    let countStr = 0;
    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === "_") {
            str += string[i];
            continue;
        }
        countStr = str.length;
        if (countStr > 0) {
            for (let j = 0; j < array.length; j++) {
                let counter = array[j].length;
                if (countStr === counter) {
                    string = string.replace(str,array[j])
                }
                
            }
        }
        str = "";

    }
    console.log(string);
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)