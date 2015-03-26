
window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};})();(function(win,d){var $=d.querySelector.bind(d);var mainBG=$('.fixed-background');var ticking=false;var lastScrollY=0;function onResize(){updateElements(win.pageYOffset);}
function onScroll(evt){if(!ticking){ticking=true;requestAnimFrame(updateElements);lastScrollY=win.pageYOffset;}}
function updateElements(){ticking=false;}
function prefix(obj,prop,value){var prefs=['webkit','Moz','o','ms'];for(var pref in prefs){obj[prefs[pref]+prop]=value;}}
(function(){updateElements();})();win.addEventListener('load',onResize,false);win.addEventListener('resize',onResize,false);win.addEventListener('scroll',onScroll,false);})(window,document);