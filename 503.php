<?php
	header("HTTP/1.1 503 Service Temporarily Unavailable");
	header("Status: 503 Service Temporarily Unavailable");
	header("Retry-After: 3600");
?>
<!DOCTYPE html>
<html style='font-size: 14px;'>
	<head>
		<title>Temporarily unavailable due to maintenance.</title>
	</head>
	
	<body style=' background-color: black; color: white; display: inline-flex; flex-flow: column; align-items: center; width: 100%; min-width: 250px;'>
	
		<div class='logo-container'>
			<object type="image/svg+xml" data="logo_animation/logo-animation_white_txt.html" class="logo" alt="Jay Software Solutions Logo">
				<img src="resources/assets/images/logo_white_text.png" alt="Jay Software Solutions Logo">
			</object>
		</div>
	
		<div style='width: 70%; max-width: 50rem;'>
			<h1 style='font-size: 2rem; text-align: justify;'>Our website is temporarily unavailable due to scheduled maintenance.</h1>
			<p style='font-size: 1.5rem; text-align: justify;'>We'll be right back. If this problem persists for more than 20 minutes please send us an email at contact@jaysoftwaresolutions.com</p>
		</div>
	</body>
</html>