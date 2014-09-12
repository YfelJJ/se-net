var container = document.getElementById("container");

function linkAanmakenOpDePagina(textDing){
	var nieuweLink = document.createElement("p");
	nieuweLink.innerHTML = textDing;
	nieuweLink.className = "knoppie";
	nieuweLink.dataset.kleur = "red";
	container.appendChild(nieuweLink);
}
linkAanmakenOpDePagina("balzak");
var knoppies = document.querySelectorAll(".knoppie");

for(var i = 0;i<knoppies.length;i++){
	knoppies[i].addEventListener("click",function(){
		console.log(this.dataset.kleur);
		container.style.background = this.dataset.kleur;
		container.style.color = this.dataset.color;
	},false);
}
