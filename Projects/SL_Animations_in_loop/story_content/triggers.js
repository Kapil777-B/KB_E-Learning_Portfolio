function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fHFYxpTCGU":
        Script1();
        break;
      case "6BrGd7Pc585":
        Script2();
        break;
      case "5oT2F6TBZ6I":
        Script3();
        break;
      case "6I9sUpjxXFP":
        Script4();
        break;
      case "5YYvQPsEWKc":
        Script5();
        break;
      case "6MwBb71JAv4":
        Script6();
        break;
      case "6XfksoqDpqm":
        Script7();
        break;
      case "6jscKXgRl2F":
        Script8();
        break;
      case "5n4p6Wvcz12":
        Script9();
        break;
      case "5npaIjooE1v":
        Script10();
        break;
      case "6744LKVLUFw":
        Script11();
        break;
      case "5u92dqZMYTm":
        Script12();
        break;
      case "6kLRUftnPZq":
        Script13();
        break;
      case "6BrFjJQRELQ":
        Script14();
        break;
      case "67ps4f6zCQP":
        Script15();
        break;
      case "5s0U7jzS9wg":
        Script16();
        break;
      case "6Ub1OoTlQkV":
        Script17();
        break;
      case "69i7D0FjqLD":
        Script18();
        break;
      case "5UxIRmOZaGN":
        Script19();
        break;
      case "6hxgEQyx0KJ":
        Script20();
        break;
      case "5p1MBJLNGWc":
        Script21();
        break;
      case "5mgcotxXKjU":
        Script22();
        break;
      case "6NvS1hwFX1a":
        Script23();
        break;
      case "5VOY3O1IQ99":
        Script24();
        break;
      case "5Wx4rfzJD0L":
        Script25();
        break;
      case "6gJP03ccQVR":
        Script26();
        break;
      case "6luK0tJPeoa":
        Script27();
        break;
      case "6kbQk66ntf6":
        Script28();
        break;
      case "5yusdZBXj1i":
        Script29();
        break;
      case "6rD6zsv9Dz5":
        Script30();
        break;
      case "6Jeck6g3HUe":
        Script31();
        break;
      case "5kn0w8N2TTX":
        Script32();
        break;
      case "5c2GOzUXV8l":
        Script33();
        break;
      case "5kjSMPWU1VD":
        Script34();
        break;
      case "6bfqsOQsj6l":
        Script35();
        break;
      case "5lJe4cs0Lkd":
        Script36();
        break;
      case "6hL1fKorrwc":
        Script37();
        break;
      case "68WexYtdkrg":
        Script38();
        break;
      case "6DbPfa3civ1":
        Script39();
        break;
      case "5jwndcrwr8q":
        Script40();
        break;
      case "6IlPsxYk2Gz":
        Script41();
        break;
      case "6eXPPeBq1WZ":
        Script42();
        break;
      case "6eqBPWVgajC":
        Script43();
        break;
      case "6PQO9AwvdhF":
        Script44();
        break;
      case "5uYiDe8bosl":
        Script45();
        break;
      case "5ytHxsIe0yj":
        Script46();
        break;
      case "5ww3PjmxtkG":
        Script47();
        break;
      case "5iF0fuuAFjg":
        Script48();
        break;
      case "6FwFagld9YG":
        Script49();
        break;
      case "6CIFWHrkGOV":
        Script50();
        break;
  }
}

window.InitExecuteScripts = function()
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
  const target = object('5hOSUaf0wFg');
const duration = 2000;
const easing = 'ease-out';
const id = '6N6gvu1TDbu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5hOSUaf0wFg');
const duration = 2000;
const easing = 'ease-out';
const id = '6N6gvu1TDbu';
const pulseAmount = 0.07;
const delay = 500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5YvhlvXZNzi');
const duration = 750;
const easing = 'ease-out';
const id = '6VjjwQIYEeQ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5YvhlvXZNzi');
const duration = 750;
const easing = 'ease-out';
const id = '6VjjwQIYEeQ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5tx0Odg5l6q');
const duration = 2000;
const easing = 'ease-out';
const id = '6cPeuyNOxa6';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('5tx0Odg5l6q');
const duration = 2000;
const easing = 'ease-out';
const id = '6cPeuyNOxa6';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6khgrK2mHhg');
const duration = 2000;
const easing = 'ease-out';
const id = '5pAaqkiv7Pp';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6khgrK2mHhg');
const duration = 2000;
const easing = 'ease-out';
const id = '5pAaqkiv7Pp';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6qzRBMBmymI');
const duration = 2000;
const easing = 'ease-out';
const id = '6h1aIwe7Zeg';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('6qzRBMBmymI');
const duration = 2000;
const easing = 'ease-out';
const id = '6h1aIwe7Zeg';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6IB4TqxeGpS');
const duration = 2000;
const easing = 'ease-out';
const id = '6CHCJBuvB4i';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('6IB4TqxeGpS');
const duration = 2000;
const easing = 'ease-out';
const id = '6CHCJBuvB4i';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('68lbaiSN8G0');
const duration = 2000;
const easing = 'ease-out';
const id = '68P433ea3Db';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('68lbaiSN8G0');
const duration = 2000;
const easing = 'ease-out';
const id = '68P433ea3Db';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6RcaXu9ZAhS');
const duration = 2000;
const easing = 'ease-out';
const id = '5mPTfAuJvVI';
const pulseAmount = 0.1;
const delay = 7000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('6RcaXu9ZAhS');
const duration = 2000;
const easing = 'ease-out';
const id = '5mPTfAuJvVI';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6T3UjpgQezP');
const duration = 750;
const easing = 'ease-out';
const id = '5tDDrPVAPqW';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6T3UjpgQezP');
const duration = 750;
const easing = 'ease-out';
const id = '5tDDrPVAPqW_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6OmAzgzHz2O');
const duration = 750;
const easing = 'ease-out';
const id = '5nbK2UpYHt5';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6OmAzgzHz2O');
const duration = 750;
const easing = 'ease-out';
const id = '5nbK2UpYHt5_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  player.once(() => {
const target = object('5Xn6xYbbtsp');
const duration = 2000;
const easing = 'ease-out';
const id = '6nHkcwPmr3v';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  const target = object('5Xn6xYbbtsp');
const duration = 2000;
const easing = 'ease-out';
const id = '6nHkcwPmr3v';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6FSyBCikYZg');
const duration = 750;
const easing = 'ease-out';
const id = '5g8b1wV1yXX';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6FSyBCikYZg');
const duration = 750;
const easing = 'ease-out';
const id = '5g8b1wV1yXX_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6D0at1MxK6n');
const duration = 750;
const easing = 'ease-out';
const id = '6nAPwYcKJz5';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6D0at1MxK6n');
const duration = 750;
const easing = 'ease-out';
const id = '6nAPwYcKJz5_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6aYTSe323y3');
const duration = 2000;
const easing = 'ease-out';
const id = '6hxM6h0AdG1';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  const target = object('6aYTSe323y3');
const duration = 2000;
const easing = 'ease-out';
const id = '6hxM6h0AdG1';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6XuuoZEURri');
const duration = 750;
const easing = 'ease-out';
const id = '6RTcQkouccS';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6XuuoZEURri');
const duration = 750;
const easing = 'ease-out';
const id = '6RTcQkouccS_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6KozFW8Gwjh');
const duration = 750;
const easing = 'ease-out';
const id = '6pQcRT2n5TH';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6KozFW8Gwjh');
const duration = 750;
const easing = 'ease-out';
const id = '6pQcRT2n5TH_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6OzfFq1NdyM');
const duration = 2000;
const easing = 'ease-out';
const id = '5kjjvZgR1GI';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  const target = object('6OzfFq1NdyM');
const duration = 2000;
const easing = 'ease-out';
const id = '5kjjvZgR1GI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('5vjpZ2mDkiH');
const duration = 750;
const easing = 'ease-out';
const id = '6ltxGAsLeds';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5vjpZ2mDkiH');
const duration = 750;
const easing = 'ease-out';
const id = '6ltxGAsLeds_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6PtMYJiCvJ3');
const duration = 750;
const easing = 'ease-out';
const id = '6gWuT5ZJFJn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6PtMYJiCvJ3');
const duration = 750;
const easing = 'ease-out';
const id = '6gWuT5ZJFJn_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  player.once(() => {
const target = object('5sCCWGBlp35');
const duration = 2000;
const easing = 'ease-out';
const id = '68P433ea3Db';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script40 = function()
{
  const target = object('5sCCWGBlp35');
const duration = 2000;
const easing = 'ease-out';
const id = '68P433ea3Db';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5hz7xVPsLEe');
const duration = 750;
const easing = 'ease-out';
const id = '6V4x5UtI3nT';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('5hz7xVPsLEe');
const duration = 750;
const easing = 'ease-out';
const id = '6V4x5UtI3nT_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6JerImB59az');
const duration = 750;
const easing = 'ease-out';
const id = '5fqNhiqFvbT';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6JerImB59az');
const duration = 750;
const easing = 'ease-out';
const id = '5fqNhiqFvbT_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  player.once(() => {
const target = object('5uFwdD0qylj');
const duration = 2000;
const easing = 'ease-out';
const id = '6Ymx65drSSA';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script46 = function()
{
  const target = object('5uFwdD0qylj');
const duration = 2000;
const easing = 'ease-out';
const id = '6Ymx65drSSA';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6pkPLvafXlm');
const duration = 750;
const easing = 'ease-out';
const id = '6hvJB18mO6i';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6pkPLvafXlm');
const duration = 750;
const easing = 'ease-out';
const id = '6hvJB18mO6i_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('6VtMudZGOT7');
const duration = 750;
const easing = 'ease-out';
const id = '66lvUt2aNip';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('6VtMudZGOT7');
const duration = 750;
const easing = 'ease-out';
const id = '66lvUt2aNip_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
