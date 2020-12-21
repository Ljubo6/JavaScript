function solve(l,w,h,p) {
    let lenght = Number(l);
    let width = Number(w);
    let heght = Number(h);
    let percent = Number(p);

    let tankVolume = lenght * width * heght;
    let litters = tankVolume * 0.001;
    let percentTank = percent * 0.01;

    let realLitters = litters * (1 - percentTank);

    console.log(realLitters);
}
solve("85",
"75",
"47",
"17")
;
