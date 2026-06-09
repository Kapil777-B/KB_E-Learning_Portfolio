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
window.Script1 = function()
{
  var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

var player = GetPlayer();

// Calculate hour rotation
var hourRotation = (hours % 12) * 30 + (minutes / 2);
var normalizedHourRotation = Math.round((hourRotation / 360) * 3599 + 1);
player.SetVar("Hours", normalizedHourRotation);

// Calculate minute rotation
var minuteRotation = minutes * 6;
var normalizedMinuteRotation = Math.round((minuteRotation / 360) * 3599 + 1);
player.SetVar("Minute", normalizedMinuteRotation);

// Calculate second rotation
var secondRotation = seconds * 6;
var normalizedSecondRotation = Math.round((secondRotation / 360) * 59 + 1);
player.SetVar("Second", normalizedSecondRotation);

}

};
