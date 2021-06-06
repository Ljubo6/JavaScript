function solve(){
    let types = {};
    for (const arg of arguments) {
        let type = typeof(arg);
        console.log(`${type}: ${arg}`);
        if (!types[type]) {
            types[type] = 1;
        }else{
            types[type]++;
        }
    }
    Object.keys(types).sort((a,b) => types[b] - types[a]).forEach(x => console.log(`${x} = ${types[x]}`))
    
}