<?php
    require_once('connection.php'); //connect to database
    $query = $connection -> query("SELECT albums.id, albums.title, albums.rating, albums.cover, artists.name FROM albums 
        JOIN artists ON albums.id_artist = artists.id");
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link href="css/style.css" rel="stylesheet">
    <title>Music</title>
</head>
<body class="w90">
    <header></header>
    <h1>Музыка</h1>
    <div>
        <input id="find-field" type="text" placeholder="Поиск">
    </div>
    <div id="albums" class="albums">
        <div class="album">
            <div class="album-image">
                <a href="#">
                    <img src="img/covers/chinese.jpeg" alt="album-image"/>
                </a>
            </div>
            <div class="rating r-5"></div>
            <h3>
                <a href="#">Chinese Football</a>
            </h3>
            <h4>
                <a href="#">Chinese Football</a>
            </h4>
        </div>
    </div>    
</body>
</html>