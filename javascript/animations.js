$(document).ready(function(){
	var first;
	var text;
	$('.faceImage').click(function(){
		console.log($("#people").position().top);
		first = this.parentNode.parentNode.cloneNode(true);
		text = $(first).children(".infoContent").clone();
		$("#people").append("<div id='infoWindow'></div>");
		$('#infoWindow').append("<img src='images/icons/close.png' alt='sluit' width='30' height='30' id='closeButton'/>");
		$("#closeButton").css({"position":"absolute"});
		$("#closeButton").css({"top":"-15px"});
		$("#closeButton").css({"left":"-15px"});
		$('#infoWindow').animate({"width":$('#people').width() + "px"},400);
		$('#infoWindow').animate({"height":$('#people').height() - 20 + "px"},400);
		$('#infoWindow').css({"top":$("#people").position().top +40+ "px"},400);

		$('#infoWindow').append(first);
		$('#infoWindow').append(text);
		$(text).css({"display":"block"});
		$(text).css({"position":"absolute"});
		$(text).css({"top":"0"});
		$(text).css({"width":"750px"});
		$(text).css({"left":"200px"});

		// $(first).children(".infoContent").css({"display":"block"});
		$("#closeButton").click(function(){
			$("#closeButton").unbind();
			$("#infoWindow").remove();
			$("#closeButton").remove();
		});
	});
	$(window).resize(function(){
		try{
			$('#infoWindow').css({"top":$("#people").position().top +40+ "px"},400);
			$("#closeButton").css({"top":"-15px"});
			$("#closeButton").css({"left":"-15px"});
		}catch(e){
			console.log("Nis te resizen")
		}
	})
});