<?php

session_start();

if(isset($_SESSION['logged_in'])){
    session_unset();
    session_destroy();
} 

echo "<script>location.href='index.php'</script>";

die();

?>