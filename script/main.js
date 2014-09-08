window.addEventListener("load",pageLoaded,false);
function pageLoaded(){
	var container = document.getElementById("container");
	var logo = document.getElementById("logo");
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

	logo.addEventListener("click", function(){
		$("#container").animate({scrollTop: 0});
	});
	// window.addEventListener("resize",function(){
	// 	contentPartSize = container.height / amountOfContentParts;
	// },false);

	showNav.addEventListener("change",reposition,false);
	window.addEventListener("resize",function(){
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;

		if(windowWidth <= 500){
			nav.style.left = "-180px";
		}
		else{
			nav.style.left = "0px";
		}

	},false);

	function reposition(){
		if(showNav.checked){
			nav.style.left = "-180px";
		}else if(!showNav.checked){
			nav.style.left = "0px";
		}		
	}
	container.addEventListener("scroll",function(){
		// console.log(container.scrollTop);
		console.log(parseInt(container.offsetHeight/amountOfContentParts));
	},false);

	var knoppies = document.querySelectorAll(".menuItem");

	for(var i = 0;i<knoppies.length;i++){
		knoppies[i].addEventListener("click",function(){
			console.log(this.dataset.kleur);
			nav.style.background = this.dataset.kleur;
		},false);
	}
}
