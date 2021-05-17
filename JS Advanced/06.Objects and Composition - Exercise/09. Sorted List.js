function solve(){
    let result = [];
    function add(element){
        result.push(element),
        result.sort((a,b) => a - b);
        this.size++;
    }
    function remove(index){
        if (index >= 0 && index < result.length) {
            result.splice(index,1);
            this.size--;
        }
    }
    function get(index){
        if (index >= 0 && index < result.length) {
            return result[index];
        }
    }
    return{
        add,
        remove,
        get,
        size : 0
    }
}
let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
