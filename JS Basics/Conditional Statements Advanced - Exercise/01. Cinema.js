function solve(typeMovie,row,col){
    row = +row;
    col = +col;
    let price = 0;
    if(typeMovie === "Premiere"){
        price = row * col * 12.00;
    }else if(typeMovie === "Normal"){
        price = row * col * 7.50;
    }else if(typeMovie === "Discount"){
        price = row * col * 5.00;
    }
    console.log(`${price.toFixed(2)} leva`)
}
solve("Premiere",
"10",
"12")
;