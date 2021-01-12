function solve(input){
    let numCount = +input[0];
    let salary = +input[1];
    for(let i = 2;i < input.length;i++){
        if(input[i] === "Facebook"){
            salary -= 150;
        }else if(input[i] === "Instagram"){
            salary -= 100;
        }else if(input[i] === "Reddit"){
            salary -= 50;
        }

        if(salary <= 0){
            console.log("You have lost your salary.")
            break;
        }
    }
    if(salary > 0){
       console.log(salary); 
    }
    
}
solve(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]


);