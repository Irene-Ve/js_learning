/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
 import Backpack from "./Backpack.js";

 const everydayPack = new Backpack(
   "Green Frog",
   30,
   "grey",
   15,
   26,
   26,
   false,
   "December 5, 2018 15:00:00 PST"
 );
 
// b04_01
// BACKTICK(accento grave) = alt+96
/*const content = `  
    <main>
      <article>
        <h1>${everydayPack.name}</h1>  <!--injecting the name, that is a variable-->
        <ul>
          <li>Volume: ${everydayPack.volume}</li>
          <li>Color: ${everydayPack.color}</li>
          <li>Age: ${everydayPack.backpackAge()}</li>
          <li>Number of pockets: ${everydayPack.pocketNum}</li>
          <li>Left strap length: ${everydayPack.strapLength.left}</li>
          <li>Right strap length: ${everydayPack.strapLength.right}</li>
          <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
      </article>
    </main>
`; 
*/
// b04_02
const content = "<h1>name goes here</h1>";
const content2 = "<h1>${everydayPack.name}</h1>"; // doesn't work the same!!!
const content3 = "<h1>" + everydayPack.name + "</h1>"; // string concatenation

document.body.innerHTML = content; // 

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());