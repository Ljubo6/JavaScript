function solve(num,dimOne,dimTwo){
    num = Number(num);
     if(dimOne === "cm"){
         num *= 0.01;
     }else if(dimOne === "mm"){
         num *= 0.001;
     }

     if(dimTwo === "cm"){
         num *= 100;
     }else if (dimTwo === "mm"){
         num *= 1000;
     }
     console.log(num.toFixed(3));
}
solve("45", "cm", "mm");