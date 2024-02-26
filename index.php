<?php
    try{
        require("./config/index.php");
        // Navigator
        include "./navigator/index.php";
    }catch(Exception $err){
        echo "".$err->getMessage()."";
    }
?>