function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pvIO3OmBJy":
        Script1();
        break;
      case "5wkcZ5frlgS":
        Script2();
        break;
      case "6YJqwtlkHoO":
        Script3();
        break;
      case "6T0Sc5uzy47":
        Script4();
        break;
      case "6UEdv3dRD96":
        Script5();
        break;
      case "6Wgw0R2EgWx":
        Script6();
        break;
      case "5jHuqS08tkI":
        Script7();
        break;
      case "5cE2jLtAuEG":
        Script8();
        break;
      case "6lR696XgbHa":
        Script9();
        break;
      case "5bPF0mH9f1o":
        Script10();
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
  const target = object('5h2wS3E8vXR');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W';
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

window.Script2 = function()
{
  const target = object('5h2wS3E8vXR');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W_reverse';
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

window.Script3 = function()
{
  const target = object('6XdHfu5SKpb');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W';
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
  const target = object('6XdHfu5SKpb');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W_reverse';
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
  const target = object('6e1TXsCIYeK');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W';
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

window.Script6 = function()
{
  const target = object('6e1TXsCIYeK');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W_reverse';
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

window.Script7 = function()
{
  const target = object('6mA6V7ywjR7');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W';
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

window.Script8 = function()
{
  const target = object('6mA6V7ywjR7');
const duration = 100;
const easing = 'ease-in-out';
const id = '6XkyM1M7N0W_reverse';
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
