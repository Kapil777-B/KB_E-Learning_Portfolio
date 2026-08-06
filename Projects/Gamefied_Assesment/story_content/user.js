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
window.Script313 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script314 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script315 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script316 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script317 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script318 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script319 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script320 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script321 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script322 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script323 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script324 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script325 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script326 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script327 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script328 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script329 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script330 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script331 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script332 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script333 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script334 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script335 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script336 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script337 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script338 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script339 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script340 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script341 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script342 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script343 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script344 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script345 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script346 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script347 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script348 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script349 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script350 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script351 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script352 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script353 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script354 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script355 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script356 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script357 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script358 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script359 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script360 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script361 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script362 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script363 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script364 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script365 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script366 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script367 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script368 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script369 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script370 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script371 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

window.Script372 = function()
{
  var player = GetPlayer();

var mute = player.GetVar("Audio_on_off");

// Storyline player object
var storylinePlayer = parent.GetPlayer();

// Mute / Unmute
storylinePlayer.SetVar("Audio_on_off", mute);

var media = document.querySelectorAll("audio, video");

media.forEach(function(item) {
    item.muted = mute;
});
}

window.Script373 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (window.countdownInterval) {
    clearInterval(window.countdownInterval);
}

// Get timer value from Storyline variable
var currentTime = player.GetVar("Timer");
var totalSeconds = 12 * 60;

// Resume from existing value if available
if (currentTime && currentTime.indexOf(":") > -1) {
    var parts = currentTime.split(":");
    totalSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function updateTimer() {

    // Pause timer when variable is true
    if (player.GetVar("timer_play_Pause") === true) {
        return;
    }

    if (totalSeconds < 0) {
        clearInterval(window.countdownInterval);
        player.SetVar("Timer", "00:00");
        return;
    }

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    var display =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    player.SetVar("Timer", display);

    totalSeconds--;
}

// Update immediately
updateTimer();

// Start countdown
window.countdownInterval = setInterval(updateTimer, 1000);
}

window.Script374 = function()
{
  var player = GetPlayer();
var current = player.GetVar("Audio_on_off");
player.SetVar("Audio_on_off", !current);
}

};
