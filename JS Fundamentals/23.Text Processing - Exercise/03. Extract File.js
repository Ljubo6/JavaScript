function solve(string){
    let array = string.split("\\");
    let lastElement = array[array.length - 1];
    let lastDotIndex = lastElement.lastIndexOf(".");
    console.log(`File name: ${lastElement.slice(0,lastDotIndex)}`);
    console.log(`File extension: ${lastElement.slice(lastDotIndex + 1)}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');