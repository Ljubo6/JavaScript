function solve(input) {
    class Flight {
        constructor(number, destination) {
            this.number = number;
            this.destination = destination;
            this.status = 'Ready to fly';
        }
    }

    let flights = [];
    input[0].forEach(x => {
        let [number, destination] = x.split(' ');
        let flight = new Flight(number, destination);
        flights.push(flight);
    });

    input[1].forEach(x => {
        let [number, status] = x.split(' ');
     
        flights.forEach(flight => {
            if (flight.number === number) {
                flight.status = status;
            }
        });
    });

    let flightsFiltered = flights.filter(x => x.status == input[2][0]);
    
    flightsFiltered.forEach(x => {
        console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`);
    });
}
solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);