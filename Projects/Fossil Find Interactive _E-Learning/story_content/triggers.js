function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iqihIIRCMW":
        Script1();
        break;
      case "6MD39XAY5WB":
        Script2();
        break;
      case "6HjzMnu9TNK":
        Script3();
        break;
      case "5nCyzf6bE8Z":
        Script4();
        break;
      case "6Ul0T26tOrt":
        Script5();
        break;
      case "61lm7eTTNn5":
        Script6();
        break;
      case "5noj1Gj8Yop":
        Script7();
        break;
      case "6A6Iz4gGOzR":
        Script8();
        break;
      case "67nfx7h6DPA":
        Script9();
        break;
      case "6ZWou79W1Gx":
        Script10();
        break;
      case "6JSZEhg3Uhv":
        Script11();
        break;
      case "6FJmsgCr6tb":
        Script12();
        break;
      case "5mphtN1ETZ9":
        Script13();
        break;
      case "5uM6EYajNer":
        Script14();
        break;
      case "617rIAqCrU7":
        Script15();
        break;
      case "6LXS51BvOfA":
        Script16();
        break;
      case "6l3qnrWfy4d":
        Script17();
        break;
      case "6BtdjsXntFY":
        Script18();
        break;
      case "5rASK0BMGpP":
        Script19();
        break;
      case "5szPmcRMFtl":
        Script20();
        break;
      case "6XCBSN3mHUd":
        Script21();
        break;
      case "6lt3TETBDrV":
        Script22();
        break;
      case "6CvFVaVjRFY":
        Script23();
        break;
      case "6NWavx18k4z":
        Script24();
        break;
      case "6gGFUXRsY1U":
        Script25();
        break;
      case "6VMs59K4r20":
        Script26();
        break;
      case "5upaHRSgUSC":
        Script27();
        break;
      case "6QbkaM6ZxwG":
        Script28();
        break;
      case "5qUxBDzaL0w":
        Script29();
        break;
      case "655YIM3vCQ9":
        Script30();
        break;
      case "6o5XiZ1T42x":
        Script31();
        break;
      case "6PRdw0HX9ac":
        Script32();
        break;
      case "6fY9zjV80KD":
        Script33();
        break;
      case "6cJGSoGmQzv":
        Script34();
        break;
      case "6jx6FfYrq2X":
        Script35();
        break;
      case "6KIw9GjfVsC":
        Script36();
        break;
      case "6Yo5oe7uGbR":
        Script37();
        break;
      case "5w9RAc7arSj":
        Script38();
        break;
      case "60Vms6jopKZ":
        Script39();
        break;
      case "6730SUIreop":
        Script40();
        break;
      case "6CCCyxAVFtH":
        Script41();
        break;
      case "69sbC8OTYQ4":
        Script42();
        break;
      case "6QvIHUg5AIo":
        Script43();
        break;
      case "6L29Uwvlw4m":
        Script44();
        break;
      case "6qphQAGJ5C0":
        Script45();
        break;
      case "5nco3B9NgsE":
        Script46();
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
  const target = object('5olezDaMVG5');
const duration = 250;
const easing = 'ease-out';
const id = '6F44ji4jhsJ';
const growAmount = 0.2;
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
  const target = object('5olezDaMVG5');
const duration = 250;
const easing = 'ease-out';
const id = '6F44ji4jhsJ_reverse';
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
  const target = object('657OnvsKpYq');
const duration = 250;
const easing = 'ease-out';
const id = '5omwf4hMBuA';
const growAmount = 0.2;
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
  const target = object('657OnvsKpYq');
const duration = 250;
const easing = 'ease-out';
const id = '5omwf4hMBuA_reverse';
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
const target = object('6dfRXnVSzMo');
const duration = 1000;
const easing = 'ease-out';
const id = '6VniGiUaebo';
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

window.Script6 = function()
{
  const target = object('6dfRXnVSzMo');
const duration = 1000;
const easing = 'ease-out';
const id = '6VniGiUaebo';
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

window.Script7 = function()
{
  const target = object('5j1268p4mr1');
const duration = 250;
const easing = 'ease-out';
const id = '6YfBT378qFN';
const growAmount = 0.2;
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
  const target = object('5j1268p4mr1');
const duration = 250;
const easing = 'ease-out';
const id = '6YfBT378qFN_reverse';
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

window.Script9 = function()
{
  const target = object('6nqPkyTNMgh');
const duration = 250;
const easing = 'ease-out';
const id = '6otsbb3T2fR';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6nqPkyTNMgh');
const duration = 250;
const easing = 'ease-out';
const id = '6otsbb3T2fR_reverse';
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

window.Script11 = function()
{
  player.once(() => {
const target = object('6dZicRjWZzf');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('5jmcv8IddE9');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6WSJMPzdElf');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6ErMWDxHe3j');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6ErMWDxHe3j');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('6ErMWDxHe3j');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
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

window.Script17 = function()
{
  const target = object('6ErMWDxHe3j');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6cQIvl4pJdJ');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('61DJPJtzNCA');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('61DJPJtzNCA');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('61DJPJtzNCA');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
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

window.Script22 = function()
{
  const target = object('61DJPJtzNCA');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5mWniRDn7mT');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  player.once(() => {
const target = object('6qPmQbfvTb5');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script25 = function()
{
  player.once(() => {
const target = object('5WskwVm9WrN');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  player.once(() => {
const target = object('6SvAGKPw2jl');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script27 = function()
{
  player.once(() => {
const target = object('5YM8xrKUTpK');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6hxXLMLPTSq');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  player.once(() => {
const target = object('5fNTGbC1A9V');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  player.once(() => {
const target = object('5fNTGbC1A9V');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script31 = function()
{
  const target = object('5fNTGbC1A9V');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
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

window.Script32 = function()
{
  const target = object('5fNTGbC1A9V');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  player.once(() => {
const target = object('6V4YpuP7TrG');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script34 = function()
{
  player.once(() => {
const target = object('62vpdm8bF6C');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  player.once(() => {
const target = object('5UpG23RA0EG');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script36 = function()
{
  player.once(() => {
const target = object('6IFTDmO7D0f');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script37 = function()
{
  player.once(() => {
const target = object('6IFTDmO7D0f');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  const target = object('6IFTDmO7D0f');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
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

window.Script39 = function()
{
  const target = object('6IFTDmO7D0f');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  player.once(() => {
const target = object('6NAsjNwDfTS');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6CSPCj5D5B5');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  player.once(() => {
const target = object('6KNj0LV8xs7');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script43 = function()
{
  player.once(() => {
const target = object('6KNj0LV8xs7');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script44 = function()
{
  const target = object('6KNj0LV8xs7');
const duration = 1250;
const easing = 'ease-out';
const id = '5qDliwwNkhG';
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

window.Script45 = function()
{
  const target = object('6KNj0LV8xs7');
const duration = 1000;
const easing = 'ease-out';
const id = '5W6hb7HXXeO';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  player.once(() => {
const target = object('6aMo260kttE');
const duration = 1000;
const easing = 'ease-out';
const id = '649LdBuonmB';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
