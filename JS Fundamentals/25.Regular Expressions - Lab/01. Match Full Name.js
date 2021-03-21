function solve(array){
    let names = array.shift();
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    while ((validName = regex.exec(names)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(" "));
}
solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ]);