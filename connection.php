<?php
    $HOST = "localhost";
    $USER = "root";
    $PASSWORD = "root";
    $DB = "music";
    $connection = new mysqli($HOST, $USER, $PASSWORD, $DB);
    $connection -> query('SET NAMES "utf8"');
?>