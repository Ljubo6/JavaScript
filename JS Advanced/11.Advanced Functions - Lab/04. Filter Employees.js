function solve(data,criteria){
    const parseData = JSON.parse(data);
    const parsedCriteria = criteria.split('-');
    let result = [];
    
    parseData.map(x => {
        if(parsedCriteria !== 'all'){
            x[parsedCriteria[0]] === parsedCriteria[1] ? result.push({firstName: x.first_name,secondName:x.last_name,email:x.email}) : x;
        }else{
            result.push(x);
        }

    });
    result.forEach((el,index) => {
        console.log(`${index}. ${el.firstName} ${el.secondName} - ${el.email}`);
    })
}
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);