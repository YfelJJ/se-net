var text = document.getElementById("text");
var windowWidth;
var windowHeight;

window.addEventListener("resize", function(){
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	if(windowWidth <= 500){
		text.innerHTML = "ju pp ap up pa";
	}
	else{
		text.innerHTML = "wasaup";
	}
});