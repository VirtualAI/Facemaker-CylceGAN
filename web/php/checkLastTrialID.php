<?php

	include('config.php');

	if(!$connection)
	{
		echo mysqli_connect_error();
		exit(mysqli_connect_error());
	}

	$resultTrialID = mysqli_query($connection, "SELECT `".$_POST."` FROM ".$tablename." ORDER BY `".$tablename."`.`".$_POST."` ASC " );

	$response = '';
	while($row = mysqli_fetch_array($resultTrialID)) {
		$response .= $row[0]."|";
	}
	$response = substr($response, 0, -1);
	echo $response;


	mysqli_close($connection);

?>
