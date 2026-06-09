function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UTS4KYqqWf":
        Script1();
        break;
      case "6iRJhzXDBA6":
        Script2();
        break;
      case "6R1RNOmim0b":
        Script3();
        break;
      case "6ny8jP971nL":
        Script4();
        break;
      case "5eXswuZA7C4":
        Script5();
        break;
      case "5uFtyhr1Xez":
        Script6();
        break;
      case "5co9rP8fpLL":
        Script7();
        break;
      case "61HJJHYfP9K":
        Script8();
        break;
      case "5kp8k8H45Tb":
        Script9();
        break;
      case "6Yv6J3lzRkj":
        Script10();
        break;
      case "5cNoE9qSw5i":
        Script11();
        break;
      case "62IxTG3fsVD":
        Script12();
        break;
      case "5ijwtYQRtiO":
        Script13();
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
const target = object('6ffiB8Al9mL');
const duration = 750;
const easing = 'ease-out';
const id = '6jFNeCbypQj';
const pulseAmount = 0.1;
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

window.Script2 = function()
{
  player.once(() => {
const target = object('63CFkgxFbRP');
const duration = 750;
const easing = 'ease-out';
const id = '60Er6g326dU';
const pulseAmount = 0.1;
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

window.Script3 = function()
{
  const target = object('5g5BudydGNX');
const duration = 750;
const easing = 'ease-out';
const id = '6ZRHhIYBckX';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5g5BudydGNX');
const duration = 750;
const easing = 'ease-out';
const id = '5ccx4bP4P0H';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5g5BudydGNX');
const duration = 750;
const easing = 'ease-out';
const id = '6hw91D03VhY';
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

window.Script6 = function()
{
  const target = object('5g5BudydGNX');
const duration = 500;
const easing = 'ease-in-out';
const id = '6Gy88UTpwRA';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6blDrClSZvJ');
const duration = 750;
const easing = 'ease-out';
const id = '6QFCDcr86zQ';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6blDrClSZvJ');
const duration = 750;
const easing = 'ease-out';
const id = '5bXsProFaRT';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6blDrClSZvJ');
const duration = 750;
const easing = 'ease-out';
const id = '5pWNZtCYLwZ';
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

window.Script10 = function()
{
  const target = object('6blDrClSZvJ');
const duration = 500;
const easing = 'ease-out';
const id = '6GcwKfKXDtt';
const bounceAmount = 0.5;
player.addForTriggers(
id,
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6blDrClSZvJ');
const duration = 500;
const easing = 'ease-in-out';
const id = '5cHpLWvizBM';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6ffiB8Al9mL');
const duration = 750;
const easing = 'ease-out';
const id = '6jFNeCbypQj';
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

window.Script13 = function()
{
  const target = object('63CFkgxFbRP');
const duration = 750;
const easing = 'ease-out';
const id = '60Er6g326dU';
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

};
