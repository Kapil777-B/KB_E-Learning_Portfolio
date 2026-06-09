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
  function isScriptAlreadyIncluded(src) {
  return document.querySelectorAll(`script[src="${src}"]`).length > 0;
}
 
function loadScript(src) {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
}
 
const nrzmalikMGFY = 'https://cdn.jsdelivr.net/gh/nrzmalik/nrzmalikslmgfy/nrzMagnifier1.2.js';
 
 
loadScript(nrzmalikMGFY);
}

window.Script2 = function()
{
  nrzMagnify("Table",2,150,'sqware');

/*Usage:
Example: 
nrzMagnify('Table', 2, 150, 'sqware');

By default, it applies a 4x zoom with a magnifier size of 150px.
e.g., nrzMagnify("Write_Your_IMAGEaccessibility_Name");

Customize the zoom level:
e.g., for 0.5x zoom: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2);

Adjust the size of the magnifier:
e.g., for a 150px magnifier size: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2, 350);
*/

}

window.Script3 = function()
{
  nrzMagnify("Table",2,150,'sqware');

/*Usage:
Example: 
nrzMagnify('Table', 2, 150, 'sqware');

By default, it applies a 4x zoom with a magnifier size of 150px.
e.g., nrzMagnify("Write_Your_IMAGEaccessibility_Name");

Customize the zoom level:
e.g., for 0.5x zoom: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2);

Adjust the size of the magnifier:
e.g., for a 150px magnifier size: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2, 350);
*/

}

};
