<?php
    $content = isset($_GET["c"]) ? "./pages/" . $_GET["c"] . ".php" : "./pages/home.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./style/404.css">
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
</body>
</html>