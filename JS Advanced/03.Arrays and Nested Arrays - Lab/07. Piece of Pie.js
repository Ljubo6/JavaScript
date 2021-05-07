function solve(array,startFlavor,endFlavor){
    let start = array.indexOf(startFlavor);
    let end = array.indexOf(endFlavor);
    return array.slice(start,end + 1);
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));