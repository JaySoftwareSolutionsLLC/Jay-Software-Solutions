<?php
	if(!isset($_POST['feedbackForm'])) {
    //This page should not be accessed directly. Need to submit the form.
//    echo "error; you need to submit the form!";
		header('location: contact_us.html');
	}
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
    $phone = $_POST['phone'];
	$organization = $_POST['org'];
	$message = $_POST['msg'];
    $pMthd = $_POST['pMthd'];
    $pTime = $_POST['pTime'];
//Validate first
	if(empty($name)||empty($visitor_email)||empty($message)) {
		echo "<h2>Name, email and message all need to be filled out in order to submit this form.</h2>";
		exit;
	}
	$email_from = $visitor_email; //<== Put your email address here
	$email_subject = "Jay Software Solutions Inquiry";
    $email_body = '';
	if ($organization != '') {
		$email_body .= "From: $name ($organization)\n";
	}
	else {
		$email_body .= "From: $name\n";
	}
	if ($phone != '') {
		$email_body .= "Phone Number: $phone\n";		
	}
	if ($pMthd != 'none') {
		$email_body .= "Preferred Method: $pMthd \n";
	}
	if ($pTime != '') {
		$email_body .= "Preferred Time: $pTime \n";
	}
	$email_body .= "\n\n$message\n\n";
	$to = "contact@jaysoftwaresolutions.com";//<== Put your email address here
	$headers = "From: $email_from \r\n";
	//Send the email!
	mail($to,$email_subject,$email_body,$headers);
	//done. redirect to thank-you page.
	header('Location: thanks.html');
?>
