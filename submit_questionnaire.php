<?php
	$errors = "";
	if (!isset($_POST['ent-name'])) $errors .= "It looks like you didn't fill out your name!<br>";
	if (!isset($_POST['ent-email']))	$errors .= "It looks like you didn't fill out your email!<br>";
	if (!isset($_POST['service-likelihood'])) $errors .= "It looks like you didn't answer how likely you were to use a service!<br>"; 
	date_default_timezone_set('America/NEW_YORK');
	$curTime = time();
	$curTime = $curTime * 1000;
	if ($curTime < 1520226000000) $errors .= "This sweepstakes hasn't started yet!<br>";
	if ($cutTime > 1521863999000) $errors .= "This sweepstakes has ended!<br>";
	
	if ($errors != "") {
		?>
		<link rel="stylesheet" href="resources/css/reset.css">
		<link rel="stylesheet" href="resources/css/main.css">
		<link rel="stylesheet" href="resources/css/submit_questionnaire.css">
		<link href="https://fonts.googleapis.com/css?family=Mr+Dafoe|Open+Sans+Condensed:300" rel="stylesheet">
		<header>
			<div class='left'>
				<object type="image/svg+xml" data="logo_animation/logo-animation_white_txt.html" class='logo'>
					<img src='resources/assets/images/logo_black_text.png' alt='Jay Software Solutions logo'>
				</object>
			</div>
			<nav class='right'>
				<a href='index.html'>Home</a>
				<a href='services.html'>Services</a>
				<!-- <a href='contest.html'>Sweepstakes</a> -->
				<a href='contact.html'>Contact</a>
			</nav>
			<nav class="right mobile">
				<img src="resources/assets/images/icon-menu.png" alt='menu icon'>
			</nav>
		</header>
		<div class="drop-down">
			<nav>
				<a href='index.html'>Home</a>
				<a href='services.html'>Services</a>
				<!-- <a href='contest.html'>Sweepstakes</a> -->
				<a href='contact.html'>Contact</a>
			</nav>
		</div>
		<?php
		echo "<h1>Oooooops!</h1><p>$errors</p>";
		?>
		<footer>
			<div class='logo-container'>
				<object type="image/svg+xml" data="logo_animation/logo-animation_black_txt.html" class="logo" alt="Jay Software Solutions Logo">
					<img src="resources/assets/images/logo_white_text.png" alt="Jay Software Solutions Logo">
				</object>
			</div>
			<div class='social-media'>
				<a href='https://twitter.com/JaySoftwareLLC' target="_blank"><i class="fab fa-twitter"></i></a>
				<a href='http://instagram.com/jaysoftwaresolutions' target="_blank"><i class="fab fa-instagram"></i></a>
				<a href='https://www.facebook.com/jaysoftwaresolutions/' target="_blank"><i class="fab fa-facebook-f"></i></a>
			</div>
			<h4>Jay Software Solutions L.L.C.</h4>
			<h4>East Aurora, NY</h4>
			<h4>contact@jaysoftwaresolutions.com</h4>
			<h4><a href='contact.html'>Contact Us</a></h4>
		</footer>
		<?php
		die();
	}
	else {
	?>
	<link rel="stylesheet" href="resources/css/reset.css">
	<link rel="stylesheet" href="resources/css/main.css">
	<link rel="stylesheet" href="resources/css/submit_questionnaire.css">
	<link href="https://fonts.googleapis.com/css?family=Mr+Dafoe|Open+Sans+Condensed:300" rel="stylesheet">
	<header>
		<div class='left'>
			<object type="image/svg+xml" data="logo_animation/logo-animation_white_txt.html" class='logo'>
				<img src='resources/assets/images/logo_black_text.png' alt='Jay Software Solutions logo'>
			</object>
		</div>
		<nav class='right'>
			<a href='index.html'>Home</a>
			<a href='services.html'>Services</a>
			<!-- <a href='contest.html'>Sweepstakes</a> -->
			<a href='contact.html'>Contact</a>
		</nav>
		<nav class="right mobile">
			<img src="resources/assets/images/icon-menu.png" alt='menu icon'>
		</nav>
	</header>
	<div class="drop-down">
		<nav>
			<a href='index.html'>Home</a>
			<a href='services.html'>Services</a>
			<!-- <a href='contest.html'>Sweepstakes</a> -->
			<a href='contact.html'>Contact</a>
		</nav>
	</div>
	<h1>Success!</h1>
	<p>You successfully entered our Opening Sweepstakes!</p>
	<footer>
		<div class='logo-container'>
			<object type="image/svg+xml" data="logo_animation/logo-animation_black_txt.html" class="logo" alt="Jay Software Solutions Logo">
				<img src="resources/assets/images/logo_white_text.png" alt="Jay Software Solutions Logo">
			</object>
		</div>
		<div class='social-media'>
			<a href='https://twitter.com/JaySoftwareLLC' target="_blank"><i class="fab fa-twitter"></i></a>
			<a href='http://instagram.com/jaysoftwaresolutions' target="_blank"><i class="fab fa-instagram"></i></a>
			<a href='https://www.facebook.com/jaysoftwaresolutions/' target="_blank"><i class="fab fa-facebook-f"></i></a>
		</div>
		<h4>Jay Software Solutions L.L.C.</h4>
		<h4>East Aurora, NY</h4>
		<h4>contact@jaysoftwaresolutions.com</h4>
		<h4><a href='contact.html'>Contact Us</a></h4>
	</footer>
	<?php
	}

/*--- Entrant Info ---*/

	$entrant = (string)$_POST['ent-name'];
	$entrant_email = (string)$_POST['ent-email'];
	$entrant_company = (string)$_POST['ent-comp'];
	$referrer = (string)$_POST['ref-name'];

	$services = $_POST['services'];
	$num_services = count($services);

	$service_likelihood = $_POST['service-likelihood'];
	$service_comments = $_POST['service-comments'];

	$website_review = $_POST['website-review'];
	$website_comments = $_POST['website-comments'];


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
		
/*--- Email Creation ---*/

	$email_to = "brettbrewster@jaysoftwaresolutions.com";
	$email_subject = "New Sweepstakes entry from".clean_string($entrant)."\n";
	$email_message = "Form details:\n\n";
	$email_message .= "Name: ".clean_string($entrant)."\n";
	$email_message .= "Email: ".clean_string($entrant_email)."\n";
	if (!empty($entrant_company)) $email_message .= "Company: ".clean_string($entrant_company)."\n";
	if (!empty($referrer)) $email_message .= "Referrer: ".clean_string($referrer)."\n\n";

	$email_message .= "Services:\n";
	for ($i=0; $i < $num_services; $i++) {
		$serv = $services[$i];
		$servBudgStr = $serv . "-budget";
		$servBudg = $_POST[$servBudgStr];
		if ($servBudg == 0) $servBudg = '???';
		$email_message .= clean_string($serv)." : $".clean_string($servBudg)."\n";
	}
	$email_message .= "Likelihood of using service: ".clean_string($service_likelihood).".\n";
	if (!empty($service_comments)) $email_message .= "Service Comments: ".clean_string($service_comments)."\n\n";

	if (!empty($website_review)) $email_message .= "How did they feel about website: ".clean_string($website_review)."\n";
	if (!empty($website_comments)) $email_message .= "Website Comments: ".clean_string($website_comments)."\n";

	$headers = "From: ".clean_string($entrant_email)."\r\n";
	mail($email_to,$email_subject,$email_message,$headers);

/*--- DataBase ---*/

	$SQLserv = 'localhost';
	$SQLuser = 'jaysoftw_guest';
	$SQLpass = 'password1234';
	$SQLdbase = 'jaysoftw_opening_sweepstakes';

	$conn = new mysqli($SQLserv, $SQLuser, $SQLpass, $SQLdbase);
	if (!$conn) {
		die("Connection to server failed: " . mysqli_connect_errno());
	}
	echo "Successfully Connected!<br>";

	if (empty($entrant_company)) $entrant_company = 'NULL';
	if (empty($referrer)) $referrer = 'NULL';
	$insertEntry = "INSERT INTO Entries (name, email, company, referrer) VALUES ('".$entrant."','".$entrant_email."','".$entrant_company."','".$referrer."')";
	if ($conn->query($insertEntry) === TRUE) {
		echo "New Entry Successfully Created.<br>";
	} else {
		echo "Error: " . $insertService . "<br>" . $conn->error;
	}

	for ($i=0; $i < $num_services; $i++) {
		$serv = $services[$i];
		$replacing = array("-");
		str_replace($replacing," ",$serv);
		$servBudgStr = $serv . "-budget";
		$servBudg = (int)$_POST[$servBudgStr];
		if ($servBudg == 0) $servBudg = '???';
		$insertBudget = "INSERT INTO `Budget Reviews` (entrant, service, budget) VALUES ('".$entrant."','".$serv."','".$servBudg."')";
		if ($conn->query($insertBudget) === TRUE) {
			echo "New Budget Successfully Added.";
		} else {
			echo "Error: " . $insertBudget . "<br>" . $conn->error;
		}		
	}

	if (empty($service_comments)) $service_comments = 'NULL';
	if (empty($website_review)) $website_review = 'NULL';
	if (empty($website_comments)) $website_comments = 'NULL';
	$insertReview = "INSERT INTO `General Reviews` (entrant, service_likelihood, service_comments, website_review, website_comments) VALUES ('".$entrant."','".$service_likelihood."','".$service_comments."','".$website_review."','".$website_comments."')";
	if ($conn->query($insertReview) === TRUE) {
		echo "New Review Successfully Entered.<br>";
	} else {
		echo "Error: " . $insertReview . "<br>" . $conn->error;
	}

	$conn->close();

	unset($_POST);

	echo $_POST['ent-name'];
	
	header('Location: sweepstakes_thanks.html');
?>
