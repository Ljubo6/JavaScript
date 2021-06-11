class Company {
    constructor() {
        this.departments = [];

    }
    addEmployee(...params) {
        for (const el of params) {
            if (el === '' || el === undefined || el === null) {
                throw new Error('Invalid input!');
            }
        }
        if (typeof params[1] !== 'number' || params[1] < 0) {
            throw new Error('Invalid input!');
        }
        let [username, Salary, Position, Department] = params;
        if (!this.departments[Department]) {
            this.departments[Department] = [];
        }
        this.departments[Department].push({ username, Salary, Position })
        return `New employee is hired. Name: ${username}. Position: ${Position}`;
    }
    bestDepartment() {
        let bestDepartment = {};
        let maxAverage = Number.MIN_SAFE_INTEGER;
        for (const department in this.departments) {
            let average = this.departments[department].reduce((a, c) => a + c.Salary, 0) / this.departments[department].length;
            if (average > maxAverage) {
                maxAverage = average;
                bestDepartment = department;
            }
            let output = [`Best Department is: ${bestDepartment}`, `Average salary: ${maxAverage.toFixed(2)}`];

            this.departments[bestDepartment].sort((a, b) => b.Salary - a.Salary || (a.username.localeCompare(b.username)));
            this.departments[bestDepartment].forEach(x => output.push(`${x.username} ${x.Salary} ${x.Position}`));
            return output.join('\n');
        }

    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
