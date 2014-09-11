window.addEventListener("load",pageLoaded,false);
function pageLoaded(){
	var colors = ["#00cc33","#ff0033","#ff6600","#0099cc"];
	var clientDiv = document.getElementById("client");
	var i = 0;

	var people = document.getElementById("people");
	var person = document.querySelectorAll(".person");
	var images = document.querySelectorAll(".faceImage");//foto als link gebruiken
	var infoDiv = document.createElement("div");

	var namen = ["naameen","naamTwee","NaamDrie","Vier","sdfjhdsfh"];
	var taken = ["trucker","vormgever","Koe","Shjon","fsdhfds"];
	var skills = ["Niks","niks","niks","niks"];

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
		try{//probeer oude div weg te halen

		}
		catch(e){//als het er niet is

		}
		console.log(arg.dataset.person)
		infoDiv.style.color = "#fff";
		infoDiv.style.position = "absolute";
		infoDiv.style.width = "inherit";
		infoDiv.style.height = people.offsetHeight + "px";
		infoDiv.style.backgroundColor = "#f00";
		infoDiv.style.top = "0";
		people.appendChild(infoDiv).innerHTML = namen[arg.dataset.person];
	}
listeners();

}