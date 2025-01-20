<?php
$host = 'localhost';
$username = 'root';
$password = '';
$name = 'me';

$conn = mysqli_connect($host,$username,$password,$name);
if(!$conn){
    die("connection failed:".mysqli_connect_error());
}

$Username = $_POST['Username'];
$Email = $_POST['Email'];
$Pass = $_POST['Pass'];


$sql = "INSERT INTO upper2(Username, Email, Pass)
 VALUES ('$Username','$Email', '$Pass')";

if($conn->query($sql)===TRUE){
echo "Reg Successful"; header("location:index.html");
}else{
    echo"Error:".$sql."<br>".$conn->error;
}

$conn->close()
?>