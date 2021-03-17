function solve(string) {
    let array = string.split(" ");
    let regex = /[A-za-z]/g;
    for (let iterator of array) {
        let isLetter = true;
        if (iterator[0] === "#" && iterator.length > 1) {

            for (let i = 1; i < iterator.length; i++) {
                let match = iterator[i].match(regex);
                let char = iterator[i];
                if (char != match) {
                    isLetter = false;
                    break;
                }

            }

            if (isLetter) {
                console.log(iterator.substring(1));
            }
        }

    }
}
solve('Nowadays everyone uses # to tag a #!pecial word in #socialMedia');