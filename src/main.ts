/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;
// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project by Blu and Melanie</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Counter!</button>
  <button id="hurt">Don't Touch Me!</button>
  <button id="Color">Press this to make me blue!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;
const secondButton = document.getElementById("hurt")!;
const myButton = document.querySelector("#Color") as HTMLButtonElement | null;

// Increments counter
button.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter.toString();
});

// Press for message
secondButton.addEventListener("click", () => {
  console.log(alert("Ouch"));
});

// When pressed the button changes to blue!
if (myButton) {
  myButton.addEventListener("click", (): void => {
    myButton.style.backgroundColor = "blue";
    myButton.style.color = "white";
    document.body.style.backgroundColor = "FF00FF";
  });
}
