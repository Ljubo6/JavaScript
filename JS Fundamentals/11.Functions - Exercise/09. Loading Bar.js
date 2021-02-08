function loadingBar(n){
    return output(n);
    function output(n){
        let result = '';
        if (n < 100) {
            result = `${n}% [${loading(n)}]` + "\n" + `Still loading...`
        } else {
            result = `100% Complete!` + "\n" + `[${loading(n)}]`;
        }
        return result; 
    }
    function loading(n){
        let load = '';
        n /= 10;
        for (let i = 0; i < n; i++) {
            
            load += '%';
        }
        for (let i = 0; i < (10 - n); i++) {
            load += '.';
            
        }
        return load;
    }
    
}
let result = loadingBar(50);
console.log(result);