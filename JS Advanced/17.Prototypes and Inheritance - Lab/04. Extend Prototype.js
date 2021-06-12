function solve(item) {
    function toSpeciesString() {
      return `I am a ${this.species}. ${this.toString()}`;
    }
    item.prototype.toSpeciesString = toSpeciesString;
    item.prototype.species = "Human";
  }