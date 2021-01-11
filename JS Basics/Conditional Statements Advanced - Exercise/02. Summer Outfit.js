function solve(input) {
    let degree = +input[0];
    let day = input[1];

    let outfit = "";
    let shoes = "";

    if (degree >= 25) {
        switch (day) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }

    } else if (degree > 18) {
        switch (day) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }

    } else if (degree >= 10) {
        switch (day) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }

    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}
solve(["22",
"Afternoon"])

    ;