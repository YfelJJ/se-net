window.addEventListener("load",pageLoaded,false);
function pageLoaded(){
	var container = document.getElementById("container");
	var contentPart = document.querySelectorAll(".menuItem");
	var showNav = document.getElementById("showNav");
	var nav = document.getElementsByTagName("NAV")[0];
	var Y = 0;
	var contentPartSize;
	var amountOfContentParts = 4;


	for(var i = 0; i < contentPart.length; i++){
		contentPart[i].addEventListener("click",function(){
			Y = window.innerHeight * this.dataset.scroll;
			$("#container").animate({scrollTop: Y});
		},false);
	}
	window.addEventListener("resize",function(){
		contentPartSize = container.height / amountOfContentParts;
		console.log(Y + " en " + container.scrollTop);
	},false);

	showNav.addEventListener("change",function(){
		if(showNav.checked){
			nav.style.left = "-180px";

		}else if(!showNav.checked){
			nav.style.left = "0px";

		}
	},false);

}
