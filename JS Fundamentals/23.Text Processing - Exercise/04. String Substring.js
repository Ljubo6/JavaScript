function solve(template,string){
    template = template.toLowerCase();
    string = string.toLowerCase();
    array = string.split(" ");
    if (array.includes(template)) {
        console.log(template);
    }else{
        console.log(`${template} not found!`);
    }
}
solve('javascript',
'JavaScript is the best programming language'
);