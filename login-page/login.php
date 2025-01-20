<?php
$host = 'localhost';
$username = 'root';
$password = '';
$name = 'me';

$conn = mysqli_connect($host,$username,$password,$name);
if(!$conn){
    die("connection failed:".mysqli_connect_error());
}

$Email = $_POST['Email'];
$Pass = $_POST['Pass'];


$sql = "SELECT * FROM upper2 WHERE Email ='$Email' AND Pass ='$Pass'";
$result=$conn->query($sql);

if($result ->num_rows > 0){
   
     header("location:../firstclass/index.html");
}
else{
   
    $error = "Invalid Email / Password";
    header("location:../login-page? error=$error");
}

$conn->close()
?>