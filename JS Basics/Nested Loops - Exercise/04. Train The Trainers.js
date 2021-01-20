function solve(input){
    let index = 0;
    let jury = +input[index];
    index++;
    let presentationName = input[index];
    let allGrade = 0;
    let allGradeCounter = 0;
    while(presentationName !== "Finish"){
        index++;
        let grade = 0;
        for(let i = 0; i < jury; i++){
            grade += Number(input[index]);
            allGrade += Number(input[index]);
            allGradeCounter++;
            index++;
        }
        let average = grade / jury;

        console.log(`${presentationName} - ${average.toFixed(2)}.`)
        presentationName = input[index];
        
    }
    let allAverage = allGrade / allGradeCounter;
    console.log(`Student's final assessment is ${allAverage.toFixed(2)}.`);
}
solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


;