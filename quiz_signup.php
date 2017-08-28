<?php
//fill in these values for with your own information
$api_key = '2d23a28878b186a11ae0e4977aeae06d-us2';
$datacenter = 'us2';
$list_id = '3a4e99c246';
$email = $_POST['email'];
$fname = $_POST['FNAME'];
$lname = $_POST['LNAME'];
$score = $_POST['score'];
$a1 = $_POST['a1'];
$a2 = $_POST['a2'];
$a3 = $_POST['a3'];
$a4 = $_POST['a4'];
$a5 = $_POST['a5'];
$a6 = $_POST['a6'];
$a7 = $_POST['a7'];
$a8 = $_POST['a8'];
$a9 = $_POST['a9'];
$a10 = $_POST['a10'];
$status = 'subscribed';
$success_url = 'http://tgg-accounting.com/your-results-are-on-their-way/ ';
$fail_url = 'http://tgg-accounting.com';
if(!empty($_POST['status'])){
    $status = $_POST['status'];
}
$url = 'https://'.$datacenter.'.api.mailchimp.com/3.0/lists/'.$list_id.'/members/';
$username = 'apikey';
$password = $api_key;
$data = array("email_address" => $email, "status" => $status , "merge_fields" => array("FNAME" => $fname, "LNAME" => $lname, "SCORE" => $score, "A1" => $a1, "A2" => $a2, "A3" => $a3, "A4" => $a4, "A5" => $a5, "A6" => $a6, "A7" => $a7, "A8" => $a8, "A9" => $a9, "A10" => $a10  ));
$data_string = json_encode($data);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$api_key");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);
$result=curl_exec ($ch);
curl_close ($ch);
echo $fname;
echo $lname;
echo $email;
echo $score;
echo $result;
echo $a1;
echo $a4;
echo $a7;
echo $a10;
#if($result)
#		header("Location: $success_url");
#	else
#		header("Location: $fail_url");
#
?>
