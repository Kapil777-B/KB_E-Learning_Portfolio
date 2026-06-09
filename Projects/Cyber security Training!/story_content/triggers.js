function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y4wog2CwHu":
        Script1();
        break;
      case "6ZyOwvpBg48":
        Script2();
        break;
      case "6MMXVcJD02M":
        Script3();
        break;
      case "5xNRBv1Krsd":
        Script4();
        break;
      case "6lJL8ksaqhH":
        Script5();
        break;
      case "5nzcvzZDERD":
        Script6();
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
  player.once(() => {
const target = object('6CCwWcSzcY1');
const duration = 750;
const easing = 'ease-out';
const id = '6fjrcR3ZuhD';
const pulseAmount = 0.07;
const delay = 1750;
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

window.Script2 = function()
{
  const target = object('6CCwWcSzcY1');
const duration = 750;
const easing = 'ease-out';
const id = '6fjrcR3ZuhD';
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

};
