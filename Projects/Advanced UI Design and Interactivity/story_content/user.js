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
window.Script11 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script12 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script13 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script14 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script15 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script16 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script17 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script18 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script19 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script20 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script21 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script22 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script23 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script24 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script25 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script26 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script27 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script28 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script29 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script30 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script31 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script32 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script33 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script34 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script35 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script36 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script37 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script38 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script39 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script40 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script41 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script42 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script43 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script44 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script45 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script46 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script47 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script48 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script49 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script50 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script51 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script52 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script53 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script54 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script55 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script56 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script57 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script58 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script59 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script60 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script61 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script62 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script63 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script64 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script65 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script66 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script67 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script68 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script69 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script70 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script71 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script72 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script73 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script74 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script75 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script76 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script77 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script78 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script79 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script80 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script81 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script82 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script83 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script84 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script85 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script86 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script87 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script88 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script89 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script90 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script91 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script92 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script93 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script94 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script95 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script96 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script97 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script98 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script99 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script100 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script101 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script102 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script103 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script104 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script105 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script106 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script107 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script108 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script109 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script110 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script111 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script112 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script113 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script114 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script115 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script116 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script117 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script118 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script119 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script120 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script121 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script122 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script123 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script124 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script125 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script126 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script127 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script128 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script129 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script130 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script131 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script132 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script133 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script134 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script135 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script136 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script137 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script138 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script139 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script140 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script141 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script142 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script143 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script144 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script145 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script146 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script147 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script148 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script149 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script150 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script151 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script152 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script153 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script154 = function()
{
  var player = GetPlayer();

// Starting time
var timeLeft = 30;

// Format function (adds leading zero below 10)
function formatTime(time) {
    return time < 10 ? "0" + time : time.toString();
}

// Set initial value
player.SetVar("Timer", formatTime(timeLeft));

// Start countdown
var countdown = setInterval(function () {

    var isPaused = player.GetVar("Pause_timer");

    if (!isPaused) {

        timeLeft--;

        // Update timer with format
        player.SetVar("Timer", formatTime(timeLeft));

        if (timeLeft <= 0) {
            clearInterval(countdown);
            player.SetVar("Timer", "00");

            // Optional action
            // player.SetVar("TimeUp", true);
        }
    }

}, 1000);
}

window.Script155 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script156 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script157 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script158 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script159 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script160 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script161 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script162 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script163 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script164 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script165 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script166 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script167 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script168 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script169 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script170 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script171 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script172 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script173 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script174 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script175 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script176 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script177 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script178 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script179 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script180 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script181 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script182 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script183 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script184 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script185 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script186 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script187 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script188 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script189 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script190 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script191 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script192 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script193 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script194 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script195 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script196 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script197 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script198 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script199 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script200 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script201 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script202 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script203 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script204 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script205 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script206 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script207 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script208 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script209 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script210 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script211 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script212 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script213 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script214 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script215 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script216 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script217 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script218 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script219 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script220 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script221 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script222 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script223 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script224 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script225 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script226 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script227 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script228 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script229 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script230 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script231 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script232 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script233 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script234 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script235 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script236 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script237 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script238 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script239 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script240 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script241 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script242 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

window.Script243 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("VolumeControl") / 100;
var iterations = 0;
var maxIterations = 10; // Run for about 2 seconds (200ms * 10)

var intervalID = setInterval(function() {
    // Apply volume to all audio elements
    document.querySelectorAll("audio").forEach(function(audio) {
        if (audio.volume !== volume) {
            audio.volume = volume;
        }
    });
    
    // Apply volume to all MP4 video elements
    document.querySelectorAll("video").forEach(function(video) {
        if (video.volume !== volume) {
            video.volume = volume;
        }
    });
    
    iterations++;
    if (iterations >= maxIterations) {
        clearInterval(intervalID);
    }
    
    console.log("Interval volume applied: " + volume);
}, 200);

}

};
