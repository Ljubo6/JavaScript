function solve(figure,sideA,sideB){
    let area = 0;
    if(figure === "rectangle"){
        sideA = +sideA;
        sideB = +sideB;
        area = sideA * sideB;
    }else if(figure === "square" ){
        sideA = +sideA;
        area = Math.pow(sideA,2);
    }else if(figure === "circle"){
        sideA =+sideA;
        area = Math.PI * Math.pow(sideA,2);
    }else if(figure === "triangle"){
        sideA = +sideA;
        sideB = +sideB;
        area = sideA * sideB / 2;
    }

    console.log(area.toFixed(3));
}
solve("triangle",
"4.5",
"20")

;
