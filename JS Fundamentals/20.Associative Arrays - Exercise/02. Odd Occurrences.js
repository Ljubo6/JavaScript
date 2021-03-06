function solve(str){
    let arr = str.split(" ");
    let map = new Map();

    for (let word of arr) {
        word = word.toLowerCase();
        if (!map.has(word)) {
            map.set(word,0);
        }
        let newVal = map.get(word) + 1;
        map.set(word,newVal)
    }
    let keys = Array.from(map.keys())
    .filter(x => map.get(x) % 2 !== 0)
    .join(' ');
    console.log(keys);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');