<?php
	include 'content/components/header.php';
	// include 'content/components/info.php'; 
	include 'content/components/nav.php'; 
?>
	<!-- GOOGLE MAP HERE -->
	<div id="map"></div>


	<!-- WELCOME MESSAGE	-->
	<div  id="welcome-dialog" class="-zoom" 
		data-role="dialog"
		data-overlay="true"
		data-overlay-color="d-overlay"
		data-color="fg-white bg-darkGreen"
		data-width="80%"
		data-hide="5000"
	>
	    <h1>Tourist <span class="fg-grayDark">SP<span class="mif-earth"></span>T</span></h1>
	    <p>Loading. . .</p>
	</div>

	<!-- STREET VIEW -->
	<div id="pano" data-role="charm"></div>
	<div id="wrapper"></div>
<?php
	include 'content/components/footer.html';
?>