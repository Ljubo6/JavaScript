// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"

function grades(point){
    let output = "";
    if (point < 3.00) {
        output = "Fail (2)";
    }else if(point < 3.50){
        output = `Poor (${point.toFixed(2)})`;
    }else if(point < 4.50){
        output = `Good (${point.toFixed(2)})`;
    }else if(point < 5.50){
        output = `Very good (${point.toFixed(2)})`;
    }else{
        output = `Excellent (${point.toFixed(2)})`;
    }
    return output;

}
let notes = grades(5.53);
console.log(notes);
