function solve(array) {
    let destinations = {};
    for (let line of array) {
        let [country, town, price] = line.split(" > ");
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
            if (!destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = Number(price);
            } else {
                if (destinations[country][town] > Number(price)) {
                    destinations[country][town] = Number(price);
                }
            }

        } else {
            if (!destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = Number(price);
            } else {
                if (destinations[country][town] > Number(price)) {
                    destinations[country][town] = Number(price);
                }
            }
        }
    }
    let ordered = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]));
    ordered = ordered.map(x => [x[0], Object.entries(x[1]).sort((x, y) => x[1] - y[1])]);
    ordered.forEach(x => {
        console.log(`${x[0]} -> ${x[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()}`)
    });
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
);