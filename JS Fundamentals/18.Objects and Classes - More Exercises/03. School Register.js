function schoolRegister(input) {
    let register = {};

    input.forEach(x => {
        x = x.split(', ');
        let name = x[0].split(': ')[1];
        let grade = Number(x[1].split(': ')[1]) + 1;
        let score = Number(x[2].split(': ')[1]);

        if (score >= 3) {
            let student = { name, score };
            
            if (!register.hasOwnProperty(grade)) {
                register[grade] = [];
            }
            
            register[grade].push(student);
        }
    });

    let grades = Object.keys(register);
    
    grades.forEach(x => {
        console.log(`${x} Grade`);
        console.log(`List of students: ${register[x].map(student => student.name).join(', ')}`);
        console.log(`Average annual grade from last year: ${average(register[x].map(student => student.score)).toFixed(2)}\n`);
    });

    function average(array) {
        return array.reduce((a, b) => a + b, 0) / array.length;
    }
}

schoolRegister([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);