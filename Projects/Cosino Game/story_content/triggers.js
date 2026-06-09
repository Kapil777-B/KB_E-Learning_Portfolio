function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VqXEwoV6hN":
        Script1();
        break;
      case "5pxYYj0K5fE":
        Script2();
        break;
      case "6H9MMyx5k8T":
        Script3();
        break;
      case "6D2l4jI5xZN":
        Script4();
        break;
      case "6BIwbwmnkVG":
        Script5();
        break;
      case "5xuZQ3zvbWt":
        Script6();
        break;
      case "5il4FosrfEh":
        Script7();
        break;
      case "6CoSfPlTSIG":
        Script8();
        break;
      case "6HDmZGeFaVI":
        Script9();
        break;
      case "5vVgxdVpcSI":
        Script10();
        break;
      case "68dXKAXtQML":
        Script11();
        break;
      case "6EdwUdk2O1f":
        Script12();
        break;
      case "6k7eLDb7ryH":
        Script13();
        break;
      case "6DTQWoOBdRP":
        Script14();
        break;
      case "6P6P01SLfBf":
        Script15();
        break;
      case "65NXbJuSXRo":
        Script16();
        break;
      case "5XkwDVJ8Ulq":
        Script17();
        break;
      case "6bp4KCoMYQG":
        Script18();
        break;
      case "5kxF4kAYz3u":
        Script19();
        break;
      case "6nyy9xohMTn":
        Script20();
        break;
      case "6m15diycObr":
        Script21();
        break;
      case "6jCfzqDtWYx":
        Script22();
        break;
      case "6FlGc3mdY4c":
        Script23();
        break;
      case "6ixhq2o2L3A":
        Script24();
        break;
      case "6EELe42Z2og":
        Script25();
        break;
      case "6omd6I43mhS":
        Script26();
        break;
      case "6ijBBfu3Ln8":
        Script27();
        break;
      case "6XwXvhulwBX":
        Script28();
        break;
      case "5wf3mMG21HY":
        Script29();
        break;
      case "5u7OygeDKSR":
        Script30();
        break;
      case "5rmYbeQcOtY":
        Script31();
        break;
      case "6WkX1kplEfH":
        Script32();
        break;
      case "6heyd632rsp":
        Script33();
        break;
      case "62oInkpEpsL":
        Script34();
        break;
      case "62zB8tFc7fz":
        Script35();
        break;
      case "6MAywZ6x47S":
        Script36();
        break;
      case "5xR4bYhifpc":
        Script37();
        break;
      case "5qVVJYdn5Rg":
        Script38();
        break;
      case "68ZW5HWGrMz":
        Script39();
        break;
      case "5d6AlbkZjmq":
        Script40();
        break;
      case "6M6LnHIYzcD":
        Script41();
        break;
      case "6IR7YPjiGdr":
        Script42();
        break;
      case "66rQ5uS3oNf":
        Script43();
        break;
      case "6mGFJjscqLO":
        Script44();
        break;
      case "5sHnuz3DoKV":
        Script45();
        break;
      case "5gRLPEIHTCl":
        Script46();
        break;
      case "629dSDhkqGs":
        Script47();
        break;
      case "6MY5PbscMji":
        Script48();
        break;
      case "5eU26aZ2jTD":
        Script49();
        break;
      case "5YpL9GsQbBN":
        Script50();
        break;
      case "66AZhfIFrUE":
        Script51();
        break;
      case "6or0oFcQR9O":
        Script52();
        break;
      case "6qrvmVJgLvL":
        Script53();
        break;
      case "5dAmLmFYZwh":
        Script54();
        break;
      case "6KhHYcZ1IDi":
        Script55();
        break;
      case "60uVbKgRHPg":
        Script56();
        break;
      case "6pJJ7LpesxT":
        Script57();
        break;
      case "5j85IGxjQNe":
        Script58();
        break;
      case "618hpSJjLkh":
        Script59();
        break;
      case "5r60VfdeCSo":
        Script60();
        break;
      case "5fnoneyf7MQ":
        Script61();
        break;
      case "60xnWxlZVbv":
        Script62();
        break;
      case "65iDimmJXoL":
        Script63();
        break;
      case "6EQo8E719Bv":
        Script64();
        break;
      case "6jUCt3DknX8":
        Script65();
        break;
      case "6guVbbXij99":
        Script66();
        break;
      case "6KttaRVtsyl":
        Script67();
        break;
      case "6lDoU5LeyoD":
        Script68();
        break;
      case "5pUIaiIaold":
        Script69();
        break;
      case "5hZKegp3IUE":
        Script70();
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
  const target = object('5rx2Oq8hmHW');
const duration = 750;
const easing = 'ease-out';
const id = '5qdpA2G6w6s';
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
  const target = object('5rx2Oq8hmHW');
const duration = 750;
const easing = 'ease-out';
const id = '5qdpA2G6w6s_reverse';
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
  const target = object('65AI81ZHO30');
const duration = 750;
const easing = 'ease-out';
const id = '69O9w7KyO8C';
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
  const target = object('65AI81ZHO30');
const duration = 750;
const easing = 'ease-out';
const id = '69O9w7KyO8C_reverse';
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
  const target = object('6ounKmQdJhv');
const duration = 750;
const easing = 'ease-out';
const id = '64dYiUl2mNm';
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

window.Script6 = function()
{
  const target = object('6ounKmQdJhv');
const duration = 750;
const easing = 'ease-out';
const id = '64dYiUl2mNm_reverse';
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
  const target = object('6RJpxxXANkc');
const duration = 750;
const easing = 'ease-out';
const id = '62jCNFaljCk';
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
  const target = object('6RJpxxXANkc');
const duration = 750;
const easing = 'ease-out';
const id = '62jCNFaljCk_reverse';
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
  const target = object('5WwdmnNYYYa');
const duration = 750;
const easing = 'ease-out';
const id = '6kBU8hkKRnw';
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
  const target = object('5WwdmnNYYYa');
const duration = 750;
const easing = 'ease-out';
const id = '6kBU8hkKRnw_reverse';
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
  const target = object('6gWfh5oxgY2');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9';
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

window.Script12 = function()
{
  const target = object('6gWfh5oxgY2');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9_reverse';
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

window.Script13 = function()
{
  const target = object('6SdlHukAgx2');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script14 = function()
{
  const target = object('6SdlHukAgx2');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script15 = function()
{
  const target = object('6PR3WOs1Pbq');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script16 = function()
{
  const target = object('6PR3WOs1Pbq');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script17 = function()
{
  const target = object('5ZPp3WQA3i8');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('5ZPp3WQA3i8');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('5W9tvpY78hK');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('5W9tvpY78hK');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('66H9pbTr7wW');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9';
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

window.Script22 = function()
{
  const target = object('66H9pbTr7wW');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9_reverse';
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

window.Script23 = function()
{
  const target = object('5Vb8bpqi0V1');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('5Vb8bpqi0V1');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('5aILIYqVamW');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('5aILIYqVamW');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('5lzvHalXSZ1');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script28 = function()
{
  const target = object('5lzvHalXSZ1');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script29 = function()
{
  const target = object('66MaKrvFuEt');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('66MaKrvFuEt');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('5zYcRvL1g0T');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9';
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
  const target = object('5zYcRvL1g0T');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9_reverse';
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
  const target = object('5iMMoLPLIik');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script34 = function()
{
  const target = object('5iMMoLPLIik');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script35 = function()
{
  const target = object('60xgsP5viNb');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('60xgsP5viNb');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('5aoc4CwO0op');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('5aoc4CwO0op');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('60LhTj0clbT');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script40 = function()
{
  const target = object('60LhTj0clbT');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script41 = function()
{
  const target = object('6jlAMrnHHTK');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9';
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
  const target = object('6jlAMrnHHTK');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9_reverse';
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
  const target = object('5lplJAuqX5Q');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('5lplJAuqX5Q');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('5g1QVTvyDq0');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script46 = function()
{
  const target = object('5g1QVTvyDq0');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script47 = function()
{
  const target = object('6DQquF0ODak');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('6DQquF0ODak');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
  const target = object('6NrlnbZHupD');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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
  const target = object('6NrlnbZHupD');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script51 = function()
{
  const target = object('6nvYXqcJ6BD');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9';
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

window.Script52 = function()
{
  const target = object('6nvYXqcJ6BD');
const duration = 750;
const easing = 'ease-out';
const id = '5nVQASRrSZ9_reverse';
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

window.Script53 = function()
{
  const target = object('6GNZ9dDW26e');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script54 = function()
{
  const target = object('6GNZ9dDW26e');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script55 = function()
{
  const target = object('6Undlu0dtSv');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script56 = function()
{
  const target = object('6Undlu0dtSv');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script57 = function()
{
  const target = object('6P3y8WKbBUR');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script58 = function()
{
  const target = object('6P3y8WKbBUR');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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

window.Script59 = function()
{
  const target = object('68llW8cniJL');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ';
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

window.Script60 = function()
{
  const target = object('68llW8cniJL');
const duration = 500;
const easing = 'ease-out';
const id = '6gQJrVLNchZ_reverse';
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
