function solve(input){
    let failedGrade = Number(input[0]);
    let failed = 0;
    let sumGrade = 0
    let sumProblems = 0;
    let lastproblem = "";
    let index = 1;
    while(input[index] !== "Enough"){
        let nameProblem = input[index];
        index++;
        let grade = Number(input[index]);

        if(grade <= 4){
            failed++;
        }
        if(failed === failedGrade){
            console.log(`You need a break, ${failed} poor grades.`);
            return;
        }
        sumGrade += grade;
        sumProblems++;
        lastproblem = nameProblem;



        index++
    }
    let averageScore = sumGrade / sumProblems;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${sumProblems}`);
    console.log(`Last problem: ${lastproblem}`);

}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


;