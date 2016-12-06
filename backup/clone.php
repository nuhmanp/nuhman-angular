<?php
/* 

	Register process

 */
session_start();

include('db_connect.php');

$errors = array();
$data = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);

// checking for blank values.
if (empty($_POST['name'])||($_POST['name']=="Full Name"))
  $errors['name'] = 'Name is required.';

if (empty($_POST['email'])||($_POST['email']=="Email"))
  $errors['email'] = 'Email is required.';

if (empty($_POST['password'])||($_POST['password']=="Password"))
  $errors['message'] = 'Comment is required.';




if (!empty($errors)) {
  $data['errors']  = $errors;
} else {

/*
try 
	{
		
		
		
		$name = $_POST['name'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$data['message'] =  'Hi '.$name.'. Your registration is under review, we will send an email';
		
		
				$m = new MongoClient();
   //echo "Connection to database successfully";
      // select a database
   
   $db = $m->nuhman;
   //echo "Database mydb selected";
   $collection = $db->user;
$stat = 0;

			$post = array(

			'name'     => $name,
			'email'     => $email,
        'password'     => $comment,
		'stat'     => $stat
    );
   $collection->insert($post);
			

			
		
		
	}
catch(PDOException $e)
	{
		echo "Error: ".$e->getMessage();
	}
	$conn = null;*/
}
// response back.
echo json_encode($data);
?>