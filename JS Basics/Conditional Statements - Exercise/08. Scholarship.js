function solve(salary,averageGrade,minSalary){
    salary = +salary;
    averageGrade = +averageGrade;
    minSalary = +minSalary;

    if(averageGrade >= 5.50){
        let socialSalary = 0;
        let exellentSalary = Math.floor(averageGrade * 25);
        if(salary < minSalary){
            socialSalary = Math.floor(minSalary * 0.35);
        }
        if(exellentSalary > socialSalary){
            console.log(`You get a scholarship for excellent results ${exellentSalary} BGN`);
        }else{
            console.log(`You get a Social scholarship ${socialSalary} BGN`);
        }
    }else{
        if(salary >= minSalary){
            console.log("You cannot get a scholarship!");
        }else{
            socialSalary = Math.floor(minSalary * 0.35);
            console.log(`You get a Social scholarship ${socialSalary} BGN`);
        }
    }
}
solve("480.00",
"4.60",
"450.00")


;