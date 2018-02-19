<?php
	if(!isset($_POST['feedbackForm'])) {
    //This page should not be accessed directly. Need to submit the form.
//    echo "error; you need to submit the form!";
		header('location: style_guide.html');
	}
	$name = $_POST['name'];
	$org = $_POST['org'];
	$email = $_POST['email'];
    $phone = $_POST['phone'];

	$purp = $_POST['response-purpose'];
    $aud = $_POST['response-audience'];
    $tone = $_POST['response-tone'];
	$pref = $_POST['response-pref'];
//Validate first
	if(empty($name)) {
		header( 'Location: style_guide.html' );
		exit;
	}
	$email_from = $email; //<== Put your email address here
	$email_subject = "Style Guide for $name";
    $email_body = '';
	if ($organization != '') {
		$email_body .= "For: $name ($organization)\n";
	}
	else {
		$email_body .= "For: $name\n";
	}
	$email_body .= "Email: $email\n";
	$email_body .= "Phone Number: $phone\n\n";		
	$email_body .= "Purpose: $purp\n\n";
	$email_body .= "Audience: $aud\n\n";
	$email_body .= "Tone: $tone\n\n";
	$email_body .= "Preferences: $pref\n\n";
	$to = "brettbrewster@jaysoftwaresolutions.com";//<== Put your email address here
	$headers = "From: $email_from \r\n";
	//Send the email!
	mail($to,$email_subject,$email_body,$headers);
	//done. redirect to thank-you page.
	header('Location: ../index.html');
?>
