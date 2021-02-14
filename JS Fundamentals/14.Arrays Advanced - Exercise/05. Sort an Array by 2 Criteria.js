/**
 * @param {string} array - The first argument to this function
 */
function sortByTwoCriteria(array){
    array.sort((a,b) => sortByLength(a,b)).forEach(x => console.log(x));

    function sortByLength(a,b){
        return a.length - b.length || sortByName(a,b);
    }
    function sortByName(a,b){
        
        return a.toLowerCase().localeCompare(b.toLowerCase());
        
    }
}
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);