var header = document.getElementsByTagName('header')[0];
var splash = document.getElementById('splash');
var showNav = document.getElementById('showNav');
var nav = document.getElementById('nav');
window.addEventListener("resize",max,false);
function max(){
	header.style.width = splash.offsetWidth + "px"
	splash.style.height = (window.innerHeight) + "px"
	if(window.innerWidth < 745){
		header.style.height = "";
	}
}
max();

var colors = ["#00cc33","#ff0033","#ff6600","#0099cc"];
var clientDiv = document.getElementById("client");
var i = 0;

window.setInterval(function(){
	if(window.innerWidth > 965){
		clientDiv.style.backgroundColor = colors[i];
		clientDiv.style.webkitTransition = "0.6s";
		clientDiv.style.mozTransition = "0.6s";
		clientDiv.style.oTransition = "0.6s";
		clientDiv.style.backgroundColor = colors[i];
		i++;
		clientDiv.style.oTransition = "0s";
		clientDiv.style.mozTransition = "0s";
		clientDiv.style.WebkitTransition = "0s";
		if(i == 4){
			i = 0;
		}
	}
},4000);
showNav.addEventListener("change",navOnScreen,false);
function navOnScreen(){
	// console.log(showNav.checked);
	if(showNav.checked == true && window.innerWidth < 745){
		header.style.height = "200px";
		nav.style.display ="block";
	}else{
		header.style.height = "";
		nav.style.display ="";
	}
}