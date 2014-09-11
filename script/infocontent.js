		var meer = document.querySelectorAll(".showMoreInfo");
		var infoText = document.querySelectorAll(".infoText");
		var person = document.querySelectorAll(".person");
		var aboutSection = document.getElementById("aboutSection");
		var topPosition = aboutSection.offsetTop;
		var closeButton;
		var firstDiv;

		console.log(topPosition);
		for(var i = 0; i < meer.length;i++){
			infoText[i].style.webkitTransition = "0.5s";
			meer[i].addEventListener("click",function(){
				if(this.dataset.position != "first"){

					firstDiv = document.createElement("div");
					firstDiv.innerHTML = this.parentNode.innerHTML;
					firstDiv.style.position = "absolute"; 
					firstDiv.style.top = "0px";
					firstDiv.style.height = "100%";
					firstDiv.id = "first";
					firstDiv.style.backgroundColor = "rgb(26,26,26)";
					person[0].style.visibility="hidden";
					aboutSection.appendChild(firstDiv);
				}


				this.style.display = "none";
				this.parentNode.children[2].style.opacity = "1";
				this.parentNode.children[2].style.height = "100%";
				this.parentNode.children[2].style.position = "absolute";
				this.parentNode.children[2].style.width = "1000px";
				this.parentNode.children[2].style.left = "255px";
				this.parentNode.children[2].style.top = "0px";
				//close button
				closeButton = document.createElement("img");
				closeButton.src = "images/icons/close.png";
				// console.log("hallo")


				this.parentNode.children[2].appendChild(closeButton);
				closeButton.style.position = "absolute";
				closeButton.style.top = "0px";
				closeButton.style.right = "0px";
				closeButton.style.height = "30px";
				closeButton.style.width = "30px";
				closeButton.addEventListener("click",resetStyle,false);
			},false);
		}
		function resetStyle(){
			try{
				document.getElementById("first").remove();
			}catch(e){
				console.log("de eerste");
			}
				for(var j = 0;j<infoText.length;j++){
					person[0].style.visibility="";
						// infoText[j].style.webkitTransition = "0.5s";
					infoText[j].style.opacity = "";
					infoText[j].style.height = "";
					infoText[j].style.position = "";
					infoText[j].style.width = "";
					infoText[j].style.top = "";
					infoText[j].style.display = "";
					infoText[j].style.webkitTransition = "0s";
					console.log("hallo")
					// window.setTimeout(function(){
					// },25);
				}
				for(var i = 0; i < meer.length;i++){
					meer[i].style.display ="";
				}
		}