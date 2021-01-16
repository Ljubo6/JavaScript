function solve(input){
    let average = 0;
    let name = input[0];
    let index = 1;
    let sumGrade = 0
    let count = 0;
    let fail = 0;
    while(index < input.length){
        let grade = Number(input[index]);
        if(grade < 4.00 && fail < 2){
            fail++;
        }else{
            sumGrade += grade;
        }

        if(fail === 2){
            console.log(`${name} has been excluded at ${count} grade`);
            return;
        }


        grade = Number(input[index]);
        count++;
        index++;
    }
    average = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);

}
solve(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

;