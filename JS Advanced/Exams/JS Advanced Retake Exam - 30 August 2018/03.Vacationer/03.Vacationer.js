class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        } else {
            this.creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        }
        this.wishList = [];
        

    }

    get fullName(){
        return this._fullName;
    }
    set fullName(input){
        let [firstName,middleName,lastName] = input;

        if (input.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }
 
        
        const pattern = /^[A-Z][a-z]+$/;

        if (pattern.test(firstName) === false
        || pattern.test(middleName) === false
        || pattern.test(lastName) === false) {
            throw new Error('Invalid full name');
        }

        this._fullName = {
            firstName,
            middleName,
            lastName
        };
    }

    generateIDNumber(){

        let firsNameFirstLetter = this.fullName.firstName.charCodeAt(0);
        let middleNameLength = this.fullName.middleName.length;
        let lastNameLastChar = this.fullName.lastName[this.fullName.lastName.length - 1];
        let id = 231 * firsNameFirstLetter + 139 * middleNameLength;
        let vowels = ['a','e','o','i','u'];
        vowels.includes(lastNameLastChar) ? id += '8' : id += '7';
        return id;
    }
    addCreditCardInfo(creditCard){
        let[cardNumber,expirationDate,securityNumber] = creditCard;
        if (creditCard.length < 3) {
            throw new Error(`Missing credit card information`)
        };
        if(typeof cardNumber != 'number' || typeof securityNumber != 'number' || typeof expirationDate !== 'string'){
            throw new Error(`Invalid credit card details`);
        };
        this.creditCard = {
            cardNumber,
            expirationDate,
            securityNumber
        };
    };
    addDestinationToWishList(destination){
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        };
        this.wishList.push(destination);
        this.wishList.sort((a,b) => a.length - b.length);
    };
    getVacationerInfo() {
        let result = [];

        result.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`);
        result.push(`ID Number: ${this.idNumber}`);
        result.push('Wishlist:');
        result.push(this.wishList.length === 0 ? 'empty' : this.wishList.join(', '));
        result.push('Credit Card:');
        result.push(`Card Number: ${this.creditCard.cardNumber}`);
        result.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        result.push(`Security Number: ${this.creditCard.securityNumber}`);

        return result.join('\n');
    }

};


let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
