window.addEventListener("load",pageLoaded,false);
function pageLoaded(){
	var colors = ["#00cc33","#ff0033","#ff6600","#0099cc"];
	var clientDiv = document.getElementById("client");
	var i = 0;
	window.setInterval(function(){
		clientDiv.style.backgroundColor = colors[i];
		i++;
		if(i == 4){
			i = 0;
		}
	},10000);
}