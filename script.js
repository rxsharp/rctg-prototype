//Main coding tips
var arrayTips = [
{"tip":"Design every page as a landing page."},
{"tip":"Make appealing form buttons"},
{"tip":"Learn how to use google"},
 {"tip":"Dry = Don't Repeat Yourself"},
  {"tip":"When starting a new project, design it in shades of gray and add color later"}
  
];

//Random number from the length of the array AND display of coding tip
function randomTip() {
var result = Math.floor((Math.random()*arrayTips.length) );
var tweetText = document.getElementById("random-tip").innerHTML = arrayTips[result].tip;

var rTipHighlight = document.querySelector("#random-tip");
rTipHighlight.style.display = "inline";
//Adding Twitter
document.getElementById("tweet-div").innerHTML='<a  href="https://twitter.com/intent/tweet?text=' + tweetText.replace(/\s+/g, "%20") + '" class="twitter-share-button" id="tweetTip" data-size="large">Tweet</a>';

}

