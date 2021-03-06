function solve(array){
    let company = {};
    for (const line of array) {
        let [companyName,id] = line.split(" -> ");
        if(!company.hasOwnProperty(companyName)){
            company[companyName] = [];
        }
        if(!company[companyName].includes(id)){
            company[companyName].push(id)
        }
    }
    let ordered = Object.entries(company);
    ordered.sort(([companyA,idA],[companyB,idB]) => companyA.localeCompare(companyB));
    for (let[company,ids] of ordered) {
        console.log(company);
        ids.forEach(x => console.log(`-- ${x}`));
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );