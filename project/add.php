<?php require "connect.php"; ?>


<html>
  <head>
    <title>Adding Contact..</title>
  </head>
  <body>
    <?php

    $showAlert = false;
$showError = false;
$exists=false;




		$fn=$_POST['fname'];
    $ln=$_POST['lname'];
		$e=$_POST['email'];
    $re=$_POST['reemail'];
    $p=$_POST['phone'];
    $ag=$_POST['age'];
    $tra=$_POST['tb'];

    if($_POST['fname']=='' || $_POST['phone']=='' || $_POST['email']=='')
{
Echo "please fill the empty field.";
$conn->close();
}


    $sql = "Select * from users where username='$e'";

    $result = mysqli_query($conn, $sql);

    $num = 0;

    if($num == 0) {
        if(($e == $re) && $exists==false) {


            $sql = "INSERT INTO users ( firstname, lastname, email,phone,age,tra)
             VALUES ('$fn','$ln','$e','$p','$ag','$tra')";

        }
        else {
          echo "<h3>Email do not match</h3><br>";
          echo "<h3>Go back </h3>";
    		  echo "<h3><a href='sign.html'>Go back to home</a></h3>";
        }
    }

   if($num>0)
   {
      $exists="Email alredy register";
   }



		if ($conn->query($sql) === TRUE) {
		  echo "<h3>Thank you for registeriton</h3><br>";
		  echo "<h3><a href='home.html'>Go back to home</a></h3>";
		} else {
		  echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();
    ?>
  </body>
</html>
