window.addEventListener("load",pageLoaded,false);
function pageLoaded(){
	var colors = ["#00cc33","#ff0033","#ff6600","#0099cc"];
	var clientDiv = document.getElementById("client");
	var i = 0;

	var people = document.getElementById("people");
	var person = document.querySelectorAll(".person");
	var images = document.querySelectorAll(".faceImage");//foto als link gebruiken
	var infoDiv = document.createElement("div");
	var hold = document.createElement("div");

	var taken = ["Vormgever","Vormgever","Klant","Media Developer","Media Developer"];
	var meerTaken = ["Mijn naam is Robbin, ik houd me vooral bezig met de ontwerpen,Samen met Martijn houden we ons bezig met Logo's, visitekaartjes, posters etc. Als het op websites aankomt houd ik me bezig met het ontwerpen daarvan,ook heb ik de techniek om de front end te doen voor uw website.","trucker","Koe","Shjon","fsdhfds"];
	var skills = ["HTML5 - CSS3 - PHOTOSHOP","niks","niks","niks","niks"];

	var closeButton;
	window.setInterval(function(){
		clientDiv.style.backgroundColor = colors[i];
		i++;
		if(i == 4){
			i = 0;
		}
	},10000);
	function listeners(){
		for (var i = 0; i < images.length; i++) {
			images[i].addEventListener("click",function(){
				createScreen(this);
			},false);
		};

	}
	function createScreen(arg){
		hold = arg.parentNode.cloneNode(true);
		hold.style.position = "absolute"
		hold.style.left = "0"
		hold.style.top = "0"
		infoDiv.style.color = "#fff";
		infoDiv.style.position = "absolute";
		// infoDiv.style.webkitTransition = "1s";
		infoDiv.style.width = (people.offsetWidth) - (people.offsetWidth / 5) + 'px';
		// window.setTimeout(function(){
			infoDiv.style.height = people.offsetHeight + "px";

		// },250)
		infoDiv.style.backgroundColor = "#3f3f3f";
		infoDiv.style.top = "0";
		infoDiv.style.paddingLeft = (people.offsetWidth / 5) + "px";

		people.appendChild(infoDiv).innerHTML = "<h2>" + taken[arg.dataset.person] +"</h2>" + "<p>"+ meerTaken[arg.dataset.person] +"</p>" + skills[arg.dataset.person];		
		infoDiv.appendChild(hold);
		closeButton = document.createElement("div");
		closeButton.innerHTML = "<img src='images/icons/close.png' width='30' height='30'/>";
		closeButton.style.position = "absolute";
		closeButton.style.right = "-15px";
		closeButton.style.top = "-15px";
		console.log(arg.parentNode)
		closeButton.addEventListener("click",clearScreen,false);
		infoDiv.appendChild(closeButton)
	}
	function clearScreen(){
		infoDiv.remove();
		closeButton.remove();
		hold.remove();
	}
listeners();

}