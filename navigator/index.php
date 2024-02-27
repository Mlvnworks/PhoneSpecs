<?php
    $content = isset($_GET["c"]) ? "./pages/" . $_GET["c"] . ".php" : "./pages/home.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./style/404.css">
    <link rel="stylesheet" href="./style/home.css">


    <title>PhoneSpecs</title>
</head>
<body>
    <!-- Content -->
    <?php 
        if(file_exists($content)){
            include $content;
        }else{
            include "./components/404.html";
        }
    ?>

    <!-- Custom Js -->
    <script src="./main.js"></script>
</body>
</html>