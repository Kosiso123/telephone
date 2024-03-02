const readline = require('readline')

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Observer {
    update(phoneNumber) {
        console.log(phoneNumber);
    }
}

class DialingObserver {
    update(phoneNumber){
        console.log(`Now dialing ${phoneNumber}`);
    }

}

class Telephone {
        constructor(){
            this.phoneNumbers = [];
            this.observers = [];
        }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observser);
    }
    notifyObservers(phoneNumber){
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber); 
    }

    removePhoneNumber(phoneNumber){
        this.phoneNumbers = this.phoneNumbers.filter(num => num !== phoneNumber);
    }
    dialPhoneNumber(phoneNumber){
        if (this.phoneNumbers.includes(phoneNumber)){
            console.log(`dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
        }else {
            console.log(`phone number ${phoneNumber} is not added.` );
        }
    }
}

const telephone = new Telephone();

const observer1 = new Observer();
const observer2 = new DialingObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

// telephone.addPhoneNumber(1234567890)
// telephone.addPhoneNumber(2345678901)


// telephone.dialphoneNumber(1234567890);
// telephone.dialphoneNumber(2345678901);

function promptUser(){
    rl.question('choose an action:(1) Add phone number, (2) remove phone number, (3) dial phone number, (4) Exit/n.', (answer) =>{
        switch (answer){
            case '1':
             rl.question('enter phone number to add:',(phoneNumber) => {
                telephone.addPhoneNumber(phoneNumber);
                console.log(`added phone number: ${phoneNumber}`);
                promptUser();
             });
             break;
             case '2':
             rl.question('enter phone number to remove:',(phoneNumber) => {
                telephone.removePhoneNumber(phoneNumber);
                console.log(`remove phone number: ${phoneNumber}`);
                promptUser();
             });
             break;
             case '3':
             rl.question('enter phone number to dial:',(phoneNumber) => {
                telephone.dialPhoneNumber(phoneNumber);
                promptUser();
             });
             break;
             case '4':
             console.log('exiting.....');
             rl.close()
             break;
            default:
                console.log('invalid choice');
                promptUser();
            break;
        }
    })
}
promptUser();


