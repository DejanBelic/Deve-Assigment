<?php


$from = $_POST['Name'];
$sendTo = $_POST['Email'];
$subject = 'New message from contact form';
$fields = array('name' => 'Name',  'email' => 'Email', 'message' => 'Message'); // 
$okMessage = 'Contact form share button submited. Url of page will arrive in few seconds!';
$errorMessage = 'There was an error while submitting the form. Please try again later';
$link = $_SERVER['HTTP_REFERER'];


try
{
    $emailText = "$link You got message from shared button.\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    header("Location: http://dejanbelic.tk");
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
}
else {
    echo $responseArray['message'];
}
?>
