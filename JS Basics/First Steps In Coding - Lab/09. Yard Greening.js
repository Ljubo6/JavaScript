function solve(input) {
    let area = Number(input);
    let areaPrice = area * 7.61;
    let areaPriceDisccount = areaPrice * 0.18;
    let finalPrice = areaPrice - areaPriceDisccount;
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${areaPriceDisccount} lv.`);
}
solve("150");