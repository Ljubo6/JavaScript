function solve(width,height,color){

    return {
        width,
        height,
        color : color.split('').map((x,index) => {
            if (index === 0) {
                return x.toUpperCase();
            }
            return x;
        }).join(''),
        calcArea(){
            return this.width * this.height;
        }
    }
}
let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
