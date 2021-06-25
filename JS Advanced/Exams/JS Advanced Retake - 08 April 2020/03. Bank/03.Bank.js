class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = []; 
    };
    newCustomer (customer){
        let {firstName, lastName, personalId} = customer;
        if(this.allCustomers.find(x => x.personalId === personalId)){
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        this.allCustomers.push(customer);
        return customer;
    };
    depositMoney (personalId, amount){
        if(!this.allCustomers.find(x => x.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`)
        }
        let index = this.allCustomers.findIndex(x => x.personalId === personalId);
        if (!this.allCustomers[index].hasOwnProperty('totalMoney')) {
            this.allCustomers[index]['totalMoney'] = 0;
        }
        this.allCustomers[index]['totalMoney'] += amount;

        let firstName = this.allCustomers[index].firstName;
        let lastName = this.allCustomers[index].lastName;

        if (!this.allCustomers[index].hasOwnProperty('transactions')) {
            this.allCustomers[index]['transactions'] = [];
        }
        this.allCustomers[index]['transactions'].push(`${firstName} ${lastName} made deposit of ${amount}$!`);

        return `${this.allCustomers[index]['totalMoney']}$`;
    };
    withdrawMoney (personalId, amount){
        if(!this.allCustomers.find(x => x.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`)
        }
        let index = this.allCustomers.findIndex(x => x.personalId === personalId);
        
        let firstName = this.allCustomers[index].firstName;
        let lastName = this.allCustomers[index].lastName;

        if(this.allCustomers[index]['totalMoney'] < amount){
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`)
        }
        this.allCustomers[index]['totalMoney'] -= amount;
        this.allCustomers[index]['transactions'].push(`${firstName} ${lastName} withdrew ${amount}$!`);

        return `${this.allCustomers[index]['totalMoney']}$`;
        
    };
    customerInfo (personalId){
        if(!this.allCustomers.find(x => x.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`)
        }
        let index = this.allCustomers.findIndex(x => x.personalId === personalId);

        let firstName = this.allCustomers[index].firstName;
        let lastName = this.allCustomers[index].lastName;

        let totalMoney = this.allCustomers[index]['totalMoney'];

        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${firstName} ${lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${totalMoney}$`);
        result.push(`Transactions:`);
        let array = this.allCustomers[index]['transactions'].map((x,index) => `${index + 1}. ${x}`);
        result.push(array.reverse().join('\n'));

        return result.join('\n');
    };
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
