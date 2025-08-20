// Part 2: JavaScript Functions
// Global variable
let globalCount = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating local vs global scope
function incrementGlobalCount() {
  let localMessage = "Local variable only lives here!";
  globalCount++;
  console.log("Global count is now:", globalCount);
  console.log(localMessage);
}

// Reusable function that changes DOM text
function setBoxText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = text;
    return true; // success
  }
  return false; // element not found
}

// Run demos in console
console.log("5 + 10 =", addNumbers(5, 10));
incrementGlobalCount();
incrementGlobalCount();
setBoxText("animBox", "I'm alive 🎉");

// Part 3: Combining CSS + JS
const animateBtn = document.getElementById("animateBtn");
const animBox = document.getElementById("animBox");

// Function to toggle animation class
function toggleAnimation(box) {
  box.classList.toggle("animate");
}

animateBtn.addEventListener("click", () => {
  toggleAnimation(animBox);
});
