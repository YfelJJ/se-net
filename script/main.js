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

	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50 + "px"
        }, 500);
        return false;
      }
    }
  });
});


	// for(var i = 0; i < contentPart.length; i++){
	// 	contentPart[i].addEventListener("click",function(){
	// 		Y = window.innerHeight * this.dataset.scroll;
	// 		$("#container").animate({scrollTop: Y});
	// 	},false);
	// }

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

	// function reposition(){
	// 	if(showNav.checked){
	// 		nav.style.left = "-180px";
	// 	}else if(!showNav.checked){
	// 		nav.style.left = "0px";
	// 	}		
	// }
	container.addEventListener("scroll",function(){
		// console.log(container.scrollTop);
		console.log(parseInt(container.offsetHeight/amountOfContentParts));
	},false);

	var knoppies = document.querySelectorAll(".menuItem");

	for(var i = 0;i<knoppies.length;i++){
		knoppies[i].addEventListener("click",function(){
			nav.style.background = this.dataset.kleur;
		},false);
	}
	$('.first').click(function(){
		$('#logo').css({"backgroundImage":"url('images/logo_1.png')"});
	});
	$('.second').click(function(){
		$('#logo').css({"backgroundImage":"url('images/logo_2.png')"});
	});
	$('.third').click(function(){
		$('#logo').css({"backgroundImage":"url('images/logo_3.png')"});
	});
	$('#logo').click(function(){
		$('#logo').css({"backgroundImage":"url('images/logo_white.png')"});
	});
	// if(!$('#logo').css({"backgroundImage":"url('images/logo_white.png')"})){
	// $('#logo').mouseover(function(){
	// 	$('#nav').append("<div id='logo_over'></div>");
	// });

	// }
	// $('#logo').mouseleave(function(){
	// 	$('#logo_over').remove();
	// });

	function bindEvent(e, eventName, callback) {
    if(e.addEventListener) // new browsers
        e.addEventListener(eventName, callback, false);
    else if(e.attachEvent) // IE
        e.attachEvent('on'+ eventName, callback);
	};

	bindEvent(document.body, 'scroll', function(e) {
    	document.body.scrollLeft = 0;
	});
}