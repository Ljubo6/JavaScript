function solve(input){
    function solve(input){
        let num = (Number(input) * 100);
        let coins = 0;
       while(num > 0.01){
         if(num >= 200){
           num -= 200;
           coins++
         } else if(num >= 100){
           num -= 100;
           coins++;
         } else if (num >= 50){
           num -= 50;
           coins++;
         } else if(num >= 20){
           num -= 20;
           coins++;
         } else if( num >= 10){
           num -= 10;
           coins++;
         } else if(num >= 5){
           num -= 5;
           coins++;
         } else if (num >= 2){
           num -= 2;
           coins++;
         } else if(num >= 1){
           num -= 1;
        coins++;
        break;
         }
       }
       console.log(coins)
      }
}
solve(["2.73"]);