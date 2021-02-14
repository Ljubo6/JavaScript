function distinct(array){
    console.log(array.filter((value, index, self) => self.indexOf(value) === index).join(" "));
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])