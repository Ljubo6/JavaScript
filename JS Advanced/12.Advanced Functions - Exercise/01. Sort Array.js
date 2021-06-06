function solve(array,order){
    let obj = {
        asc: (array) => { return array.sort((a,b) => a-b) },
        desc: (array) => { return array.sort((a,b) => b-a) }
    }
    return obj[order](array);
}
console.log(solve([14, 7, 17, 6, 8], 'asc'))