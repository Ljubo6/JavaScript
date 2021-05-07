function solve(array){

    return array.filter((x,index,arr) => {
        if(index % 2 === 0){
            return arr.push(x[index]);
        }
    }).join(' ');

}
console.log(solve(['20', '30', '40', '50', '60']));