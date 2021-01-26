function solve(input) {
    let pass = input[0];
    let arr = pass.split("");
    arr.reverse();
    let password = arr.join('');
    let passwordCounter = 0;
    for (let j = 1; j < input.length; j++) {
        passwordCounter++;
        if (input[j] !== password && passwordCounter < 4) {
            console.log("Incorrect password. Try again.")
        } else if (input[j] !== password && passwordCounter === 4) {
            console.log(`User ${pass} blocked!`);
            return;
        } else {
            console.log(`User ${pass} logged in.`);
            return;
        }

    }
}
solve(['Acer','login','go','let me in','recA']);