window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script9 = function()
{
  // Find the default Storyline Next button (adjust selector if needed)
var nextButton = document.getElementById("next") || 
                 document.querySelector('[id*="next"], [title="Next"], [aria-label="Next"]');

if (nextButton) {

    // --- Stop any existing blinking ---
    if (window.blinkInterval) {
        clearInterval(window.blinkInterval);
        window.blinkInterval = null;
    }

    // --- Function to set opacity based on button state ---
    function updateNextOpacity() {
        // Check if the button is disabled (has disabled attribute or class)
        var isDisabled = nextButton.disabled ||
                         nextButton.getAttribute("aria-disabled") === "true" ||
                         nextButton.classList.contains("disabled");

        // Update opacity: enabled = 1, disabled = 0.3
        nextButton.style.opacity = isDisabled ? "0.3" : "1";
    }

    // Initial check
    updateNextOpacity();

    // Observe attribute changes to react when state changes dynamically
    var observer = new MutationObserver(updateNextOpacity);
    observer.observe(nextButton, {
        attributes: true,
        attributeFilter: ["disabled", "class", "aria-disabled"]
    });

} else {
    console.warn("Next button not found — check the selector or test in published output.");
}

}

window.Script10 = function()
{
  // Declare the blinkInterval globally to access it later
if (window.blinkInterval) {
    clearInterval(window.blinkInterval);  // Make sure any previous intervals are cleared
}

var nextButton = document.getElementById("next");

// Define a function to toggle opacity
function blink() {
    if (nextButton.style.opacity === "1") {
        nextButton.style.opacity = "0.3"; // Make it slightly visible
    } else {
        nextButton.style.opacity = "1"; // Fully visible
    }
}

// Start blinking every 500 milliseconds (0.5 seconds) and store the interval in the global variable
window.blinkInterval = setInterval(blink, 500);
}

};
