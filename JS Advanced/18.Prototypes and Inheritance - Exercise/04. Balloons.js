function createBallons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }

    };
    class PartyBalloon extends Balloon {
        
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color,gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon(){
            return this._ribbon;
        }
    };
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength,text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    };
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
const balloons = createBallons();
const party = new balloons.PartyBalloon('red',10,'yellow',100);
console.log(party.color);

const birthday = new balloons.BirthdayBalloon('red',10,'yellow',100,'asasdfg');
console.log(birthday.ribbon);
console.log(birthday.text);