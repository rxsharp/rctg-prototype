//Main coding tips
var arrayTips = [
{"tip":"Design every page as a landing page."},
{"tip":"Make appealing form buttons"},
{"tip":"Learn how to use google"},
 {"tip":"Dry = Don't Repeat Yourself"},
  {"tip":"When starting a new project, design it in shades of gray and add color later"}
  
];

//Randon Tip Function
function randomTip() {
var result = Math.floor((Math.random()*arrayTips.length) );
document.getElementById("random-tip").innerHTML = arrayTips[result].tip;

var rTipHighlight = document.querySelector("#random-tip");
rTipHighlight.style.display = "inline";
}
