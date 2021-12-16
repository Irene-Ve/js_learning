/**
 * b03_10 + b03_13
 * Creating classes :
 * Class declaretion: class Name{}
 * Class expression: class Name = class{}
 * 
 * I will need to import this class both in script.js & index.html
*/

class Backpack {
    constructor( //nomeFunzione(signature con parametri){def.valori dei parametri;}
        // define parameters: 
        name,
        volume,
        color,
        pocketNum,
        strapLengthR,
        strapLengthL,
        lidOpen,
        dateAcquired // new parameter for b03_13
    ) {
        // define properties:  sarebbero setter di java
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        // this.strapLengthR = strapLengthR;
        // this.strapLengthL = strapLengthL;
        // or 
        this.strapLengthL = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
    }

    // add methods like normal functions:
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft,lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
    // new method for Date
    backpackAge() {
        let now = new Date();  // 'let' is a type of variable
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000*3600*24));
        return daysSinceAcquired;
    }


}

export default Backpack;