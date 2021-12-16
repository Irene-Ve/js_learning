/**
 * b03_11
 * create an object constructor function for the Backpack object type
*/
function Backpack( 
        name,
        volume,
        color,
        pocketNum,
        strapLengthR,
        strapLengthL,
        lidOpen
    ) {
        // define properties:  sarebbero setter di java
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum; 
        this.strapLengthL = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        // difference : the methods live inside the main constructor
        this.toggleLid = function(lidStatus) {
            this.lidOpen = lidStatus;
        };
        this.newStrapLength = function(lengthLeft,lengthRight) {
            this.strapLength.left = lengthLeft;
            this.strapLength.right = lengthRight;
        };
    }

// create a new object 
const everydayPack2 = new Backpack2(
    "Everyday Backpack2",
    30,
    "grey",
    15,
    26,
    26,
    false
);
