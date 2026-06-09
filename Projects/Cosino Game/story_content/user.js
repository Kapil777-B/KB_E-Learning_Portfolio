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
window.Script61 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("TargetAngle");  // 0–360 (e.g., 180)
var spins = player.GetVar("SpinCount");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("DialValue", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("DialValue", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script62 = function()
{
  var player = GetPlayer();

// Inputs from Storyline
var target = player.GetVar("TargetAngle_1");   // 0–360
var spins = player.GetVar("SpinCount_1");      // Total spin count

// Set initial spin count to Total_Spin (if needed)
player.SetVar("Total_Spin", spins);

// Spin setup
var fastSpins = Math.max(spins - 2, 0);
var fastTotal = fastSpins * 360;
var smoothTotal = (2 * 360) + target;
var current = 0;

// === FAST SPIN SECTION (Anti-clockwise) ===
var fastInterval = setInterval(function () {
    current += 30;

    var angle = 360 - (current % 360);
    player.SetVar("DialValue_2", angle);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === SMOOTH FINAL 2 SPINS ===
        var startTime = new Date().getTime();
        var duration = 2000;
        var smoothStart = current;

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1);

            var eased = 1 - Math.pow(1 - t, 3);
            var smoothProgress = eased * smoothTotal;
            var totalProgress = smoothStart + smoothProgress;

            var antiClockwiseAngle = 360 - (totalProgress % 360);
            player.SetVar("DialValue_2", antiClockwiseAngle);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue_2", (360 - target) % 360);
                player.SetVar("Total_Spin", 0); // ✅ Set 0 only at end
            }
        }, 20);
    }
}, 20);

}

window.Script63 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("TargetAngle");  // 0–360 (e.g., 180)
var spins = player.GetVar("SpinCount");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("DialValue", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("DialValue", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script64 = function()
{
  var player = GetPlayer();

// Inputs from Storyline
var target = player.GetVar("TargetAngle_1");   // 0–360
var spins = player.GetVar("SpinCount_1");      // Total spin count

// Set initial spin count to Total_Spin (if needed)
player.SetVar("Total_Spin", spins);

// Spin setup
var fastSpins = Math.max(spins - 2, 0);
var fastTotal = fastSpins * 360;
var smoothTotal = (2 * 360) + target;
var current = 0;

// === FAST SPIN SECTION (Anti-clockwise) ===
var fastInterval = setInterval(function () {
    current += 30;

    var angle = 360 - (current % 360);
    player.SetVar("DialValue_2", angle);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === SMOOTH FINAL 2 SPINS ===
        var startTime = new Date().getTime();
        var duration = 2000;
        var smoothStart = current;

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1);

            var eased = 1 - Math.pow(1 - t, 3);
            var smoothProgress = eased * smoothTotal;
            var totalProgress = smoothStart + smoothProgress;

            var antiClockwiseAngle = 360 - (totalProgress % 360);
            player.SetVar("DialValue_2", antiClockwiseAngle);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue_2", (360 - target) % 360);
                player.SetVar("Total_Spin", 0); // ✅ Set 0 only at end
            }
        }, 20);
    }
}, 20);

}

window.Script65 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("TargetAngle");  // 0–360 (e.g., 180)
var spins = player.GetVar("SpinCount");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("DialValue", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("DialValue", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script66 = function()
{
  var player = GetPlayer();

// Inputs from Storyline
var target = player.GetVar("TargetAngle_1");   // 0–360
var spins = player.GetVar("SpinCount_1");      // Total spin count

// Set initial spin count to Total_Spin (if needed)
player.SetVar("Total_Spin", spins);

// Spin setup
var fastSpins = Math.max(spins - 2, 0);
var fastTotal = fastSpins * 360;
var smoothTotal = (2 * 360) + target;
var current = 0;

// === FAST SPIN SECTION (Anti-clockwise) ===
var fastInterval = setInterval(function () {
    current += 30;

    var angle = 360 - (current % 360);
    player.SetVar("DialValue_2", angle);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === SMOOTH FINAL 2 SPINS ===
        var startTime = new Date().getTime();
        var duration = 2000;
        var smoothStart = current;

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1);

            var eased = 1 - Math.pow(1 - t, 3);
            var smoothProgress = eased * smoothTotal;
            var totalProgress = smoothStart + smoothProgress;

            var antiClockwiseAngle = 360 - (totalProgress % 360);
            player.SetVar("DialValue_2", antiClockwiseAngle);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue_2", (360 - target) % 360);
                player.SetVar("Total_Spin", 0); // ✅ Set 0 only at end
            }
        }, 20);
    }
}, 20);

}

window.Script67 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("TargetAngle");  // 0–360 (e.g., 180)
var spins = player.GetVar("SpinCount");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("DialValue", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("DialValue", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script68 = function()
{
  var player = GetPlayer();

// Inputs from Storyline
var target = player.GetVar("TargetAngle_1");   // 0–360
var spins = player.GetVar("SpinCount_1");      // Total spin count

// Set initial spin count to Total_Spin (if needed)
player.SetVar("Total_Spin", spins);

// Spin setup
var fastSpins = Math.max(spins - 2, 0);
var fastTotal = fastSpins * 360;
var smoothTotal = (2 * 360) + target;
var current = 0;

// === FAST SPIN SECTION (Anti-clockwise) ===
var fastInterval = setInterval(function () {
    current += 30;

    var angle = 360 - (current % 360);
    player.SetVar("DialValue_2", angle);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === SMOOTH FINAL 2 SPINS ===
        var startTime = new Date().getTime();
        var duration = 2000;
        var smoothStart = current;

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1);

            var eased = 1 - Math.pow(1 - t, 3);
            var smoothProgress = eased * smoothTotal;
            var totalProgress = smoothStart + smoothProgress;

            var antiClockwiseAngle = 360 - (totalProgress % 360);
            player.SetVar("DialValue_2", antiClockwiseAngle);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue_2", (360 - target) % 360);
                player.SetVar("Total_Spin", 0); // ✅ Set 0 only at end
            }
        }, 20);
    }
}, 20);

}

window.Script69 = function()
{
  var player = GetPlayer();

// Get values from Storyline
var target = player.GetVar("TargetAngle");  // 0–360 (e.g., 180)
var spins = player.GetVar("SpinCount");     // total spins (e.g., 5)

// Setup spins
var fastSpins = Math.max(spins - 2, 0);      // fast spins before easing
var fastTotal = fastSpins * 360;             // fast portion angle
var smoothTotal = (2 * 360) + target;        // slow portion + final target
var current = 0;

// === 1. FAST SPIN SECTION ===
var fastInterval = setInterval(function () {
    current += 30; // Fast speed
    player.SetVar("DialValue", current % 360);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === 2. SMOOTH FINAL 2 SPINS SECTION ===
        var startTime = new Date().getTime();
        var duration = 2000; // total slow spin time in ms

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1); // 0–1

            // Ease-out (cubic)
            var eased = 1 - Math.pow(1 - t, 3);

            var angle = fastTotal + (eased * smoothTotal);
            player.SetVar("DialValue", angle % 360);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue", target); // Ensure exact stop
            }
        }, 20);
    }
}, 20);

}

window.Script70 = function()
{
  var player = GetPlayer();

// Inputs from Storyline
var target = player.GetVar("TargetAngle_1");   // 0–360
var spins = player.GetVar("SpinCount_1");      // Total spin count

// Set initial spin count to Total_Spin (if needed)
player.SetVar("Total_Spin", spins);

// Spin setup
var fastSpins = Math.max(spins - 2, 0);
var fastTotal = fastSpins * 360;
var smoothTotal = (2 * 360) + target;
var current = 0;

// === FAST SPIN SECTION (Anti-clockwise) ===
var fastInterval = setInterval(function () {
    current += 30;

    var angle = 360 - (current % 360);
    player.SetVar("DialValue_2", angle);

    if (current >= fastTotal) {
        clearInterval(fastInterval);

        // === SMOOTH FINAL 2 SPINS ===
        var startTime = new Date().getTime();
        var duration = 2000;
        var smoothStart = current;

        var finalInterval = setInterval(function () {
            var elapsed = new Date().getTime() - startTime;
            var t = Math.min(elapsed / duration, 1);

            var eased = 1 - Math.pow(1 - t, 3);
            var smoothProgress = eased * smoothTotal;
            var totalProgress = smoothStart + smoothProgress;

            var antiClockwiseAngle = 360 - (totalProgress % 360);
            player.SetVar("DialValue_2", antiClockwiseAngle);

            if (t >= 1) {
                clearInterval(finalInterval);
                player.SetVar("DialValue_2", (360 - target) % 360);
                player.SetVar("Total_Spin", 0); // ✅ Set 0 only at end
            }
        }, 20);
    }
}, 20);

}

};
