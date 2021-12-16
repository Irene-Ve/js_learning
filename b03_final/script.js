/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
import Backpack from "./Backpack.js"; // b03_10

/*  const backpack = { // copied from b03_02
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) { // toggleLid Method
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};  */

// b03_06
console.log("The backpack object: ",backpack);
console.log("The pocketNum value: ", backpack.pocketNum);

var query = "pocketNum";
console.log("The pocketNum value w/ brackets: ", backpack[query]);

// b03_08 Methods
console.log("Left before: ", backpack.strapLength.left);
backpack.newStrapLength(10, 15);
console.log("Left after: ", backpack.strapLength.left);

// b03_10 look at the new Class Backpack & import Line4
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ", everydayPack.pocketNum);

// b03_13
console.log("Date acquired: ", everydayPack.dateAcquired);
// -> return a human readable string 
// I want to convert this date string into something comparable/meaningful 
// and find the age of the backpack
console.log("Days since acquired: ", everydayPack.backpackAge());


  
  
  