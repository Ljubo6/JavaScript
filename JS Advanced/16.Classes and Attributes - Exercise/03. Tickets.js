function solve(array, criteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }
    let result = [];
    array.forEach(element => {
        let [destination, price, status] = element.split('|');
        price = Number(price);
        result.push(new Ticket(destination,price,status));
    });
    if(criteria !== 'price'){
        result.sort((a,b) => a[criteria].localeCompare(b[criteria]));

    }else{
        result.sort((a,b) => a[criteria] - b[criteria]);
    }
    return result;

}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));