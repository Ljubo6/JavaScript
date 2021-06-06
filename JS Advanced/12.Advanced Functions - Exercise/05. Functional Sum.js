  
function add(num) {
    let sum = 0;
    sum += num;

    function inside(num2) {
        sum += num2;
        return inside;
    }

    inside.toString = () => sum;
    return inside;
}