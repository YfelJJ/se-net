<?php 
	$naam = (isset($_POST['naam'])) ? $_POST['naam'] : '' ;
	$email = (isset($_POST['email'])) ? $_POST['email'] : '' ;
	$onderwerp = (isset($_POST['onderwerp'])) ? $_POST['onderwerp'] : '' ;
	$bericht = (isset($_POST['bericht'])) ? $_POST['bericht'] : '' ;

	$mailVerzenden = 'Van: '.$naam. ' Email: '.$email. ' Bericht: '.$bericht;
	mail("cantfindausefulname@gmail.com",$onderwerp,$mailVerzenden);
	
	mail($email,"Mail ontvangen","Wij hebben uw mail ontvangen en zullen er zo snel mogelijk naar kijken");
	header("location: http://synder.nl");
?>