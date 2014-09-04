var text = document.getElementById("text");
var windowWidth;
var windowHeight;

window.addEventListener("resize", function(){
	windowWidth = window.innerWidth;
 	windowHeight = window.innerHeight;
	if(windowWidth <= 500){
		text.innerHTML = "kut";
	}
	else{
		text.innerHTML = "wasaup";
	}
});