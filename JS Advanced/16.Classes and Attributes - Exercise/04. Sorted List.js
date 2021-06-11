class List{
    constructor(){
        this.result = [];
        this.size = 0;
    }
    add(element){
        this.result.push(element);
        this.result.sort((a,b) => a - b);
        this.size++;
    }
    remove(index){
        if(typeof index === 'number' && index >= 0 && index < this.result.length){
            this.result.splice(index,1);
            this.result.sort((a,b) => a - b);
            this.size--;
        }
        
    }
    get(index){
        if(typeof index === 'number' && index >= 0 && index < this.result.length){
            return this.result[index];
        }
        
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
