function solve(name, projects) {
    let projectNum = Number(projects);
    let hoursCount = projectNum * 3;
    console.log(`The architect ${name} will need ${hoursCount} hours to complete ${projects} project/s.`);
}
solve("George","4");