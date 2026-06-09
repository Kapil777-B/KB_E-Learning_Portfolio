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
window.Script123 = function()
{
  addBg();
stopBg()
}

window.Script124 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script125 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script126 = function()
{
  addBg();
playBg()
}

window.Script127 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script128 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script129 = function()
{
  function SCORM_GrabAPI() {

    //if we haven't already located the API, find it using our improved ADL algorithm

    if (typeof SCORM_objAPI == "undefined" || SCORM_objAPI == null) {

        SCORM_objAPI = SCORM_GetAPI();

    }

    if (typeof SCORM_objAPI == "undefined" || SCORM_objAPI == null) {

        SCORM_objAPI = SCORM_SearchForAPI(window);

    }

 

    return SCORM_objAPI;

}

 

function SCORM_GetAPI() {

    var API = null;

    if (window.parent != null && window.parent != window) {

        API = SCORM_ScanParentsForApi(window.parent);

    }

    if (API == null && window.top.opener != null) {

        API = SCORM_ScanParentsForApi(window.top.opener);

    }

    return API;

}

 

function SCORM_ScanParentsForApi(win) {

    var MAX_PARENTS_TO_SEARCH = 500;

    var nParentsSearched = 0;

 

    while (

        (win.API == null || win.API === undefined) &&

        win.parent != null &&

        win.parent != win &&

        nParentsSearched <= MAX_PARENTS_TO_SEARCH

    ) {

        nParentsSearched++;

        win = win.parent;

    }

    return win.API;

}

 

function SCORM_SearchForAPI(wndLookIn) {

    var objAPITemp = null;

    var strDebugID = "";

 

    strDebugID = "Name=" + wndLookIn.name + ", href=" + wndLookIn.location.href;

 

    objAPITemp = wndLookIn.API;

 

    if (SCORM_APIFound(objAPITemp)) {

        return objAPITemp;

    }

 

    if (SCORM_WindowHasParent(wndLookIn)) {

        objAPITemp = SCORM_SearchForAPI(wndLookIn.parent);

    }

 

    if (SCORM_APIFound(objAPITemp)) {

        return objAPITemp;

    }

 

    if (SCORM_WindowHasOpener(wndLookIn)) {

        objAPITemp = SCORM_SearchForAPI(wndLookIn.opener);

    }

 

    if (SCORM_APIFound(objAPITemp)) {

        return objAPITemp;

    }

 

    //look in child frames individually, don't call this function recursively

    //on them to prevent an infinite loop when it looks back up to the parents

 

    objAPITemp = SCORM_LookInChildren(wndLookIn);

 

    if (SCORM_APIFound(objAPITemp)) {

        return objAPITemp;

    }

    return null;

}

 

function SCORM_LookInChildren(wnd) {

    var objAPITemp = null;

    var strDebugID = "";

    strDebugID = "Name=" + wnd.name + ", href=" + wnd.location.href;

    for (var i = 0; i < wnd.frames.length; i++) {

        objAPITemp = wnd.frames[i].API;

        if (SCORM_APIFound(objAPITemp)) {

            return objAPITemp;

        }

 

        objAPITemp = SCORM_LookInChildren(wnd.frames[i]);

        if (SCORM_APIFound(objAPITemp)) {

            return objAPITemp;

        }

    }

    return null;

}

 

function SCORM_WindowHasOpener(wnd) {

    if (wnd.opener != null && wnd.opener != wnd && typeof wnd.opener != "undefined") {

        return true;

    } else {

        return false;

    }

}

 

function SCORM_WindowHasParent(wnd) {

    if (wnd.parent != null && wnd.parent != wnd && typeof wnd.parent != "undefined") {

        return true;

    } else {

        return false;

    }

}

 

function SCORM_APIFound(obj) {

    if (obj == null || typeof obj == "undefined") {

        return false;

    } else {

        return true;

    }

}

 

function getStudentDetails() {

    var API = SCORM_GrabAPI();

 

    var studentID = API.LMSGetValue("cmi.core.student_id");

    var currDate = API.LMSGetValue("cmi.suspend_data").split("####")[1];

    var studentName = API.LMSGetValue("cmi.core.student_name");

    var arr = studentName.split(",");

    studentName = arr[1] + " " + arr[0];

 

    var d = new Date();

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 

    var currDate = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

 

    var player = GetPlayer();

 

    player.SetVar("studentID", studentID);

    player.SetVar("studentName", studentName);

 

    var completionDate = player.GetVar("completionDate");

 

    if (completionDate == "" || completionDate == null) {

        player.SetVar("completionDate", currDate);

    }

}

 

getStudentDetails();
}

window.Script130 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script131 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script132 = function()
{
  addBg();
stopBg()
}

window.Script133 = function()
{
  addBg();
playBg()
}

window.Script134 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script135 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script136 = function()
{
  addBg();
stopBg()
}

window.Script137 = function()
{
  addBg();
playBg()
}

window.Script138 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script139 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script140 = function()
{
  addBg();
stopBg()
}

window.Script141 = function()
{
  addBg();
playBg()
}

window.Script142 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script143 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script144 = function()
{
  addBg();
stopBg()
}

window.Script145 = function()
{
  addBg();
playBg()
}

window.Script146 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script147 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script148 = function()
{
  addBg();
stopBg()
}

window.Script149 = function()
{
  addBg();
playBg()
}

window.Script150 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script151 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script152 = function()
{
  addBg();
stopBg()
}

window.Script153 = function()
{
  addBg();
playBg()
}

window.Script154 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script155 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script156 = function()
{
  addBg();
stopBg()
}

window.Script157 = function()
{
  addBg();
playBg()
}

window.Script158 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script159 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script160 = function()
{
  addBg();
stopBg()
}

window.Script161 = function()
{
  addBg();
playBg()
}

window.Script162 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script163 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script164 = function()
{
  addBg();
stopBg()
}

window.Script165 = function()
{
  addBg();
playBg()
}

window.Script166 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script167 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script168 = function()
{
  addBg();
stopBg()
}

window.Script169 = function()
{
  addBg();
playBg()
}

window.Script170 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script171 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script172 = function()
{
  addBg();
stopBg()
}

window.Script173 = function()
{
  addBg();
playBg()
}

window.Script174 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script175 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script176 = function()
{
  addBg();
stopBg()
}

window.Script177 = function()
{
  addBg();
playBg()
}

window.Script178 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script179 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script180 = function()
{
  addBg();
stopBg()
}

window.Script181 = function()
{
  addBg();
playBg()
}

window.Script182 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script183 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script184 = function()
{
  addBg();
stopBg()
}

window.Script185 = function()
{
  addBg();
playBg()
}

window.Script186 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script187 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script188 = function()
{
  addBg();
stopBg()
}

window.Script189 = function()
{
  addBg();
playBg()
}

window.Script190 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script191 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script192 = function()
{
  addBg();
stopBg()
}

window.Script193 = function()
{
  addBg();
playBg()
}

window.Script194 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script195 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script196 = function()
{
  addBg();
stopBg()
}

window.Script197 = function()
{
  addBg();
playBg()
}

window.Script198 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script199 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script200 = function()
{
  addBg();
stopBg()
}

window.Script201 = function()
{
  addBg();
playBg()
}

window.Script202 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script203 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script204 = function()
{
  addBg();
stopBg()
}

window.Script205 = function()
{
  addBg();
playBg()
}

window.Script206 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script207 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script208 = function()
{
  addBg();
stopBg()
}

window.Script209 = function()
{
  addBg();
playBg()
}

window.Script210 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

window.Script211 = function()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

};
