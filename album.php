<?php
    require_once('connection.php');
    $albumID = htmlspecialchars($_GET[id]);
    if ($albumID == '')
    {
        header('Location: index.php');
    }
    else
    {
    $query = $connection -> query("SELECT albums.id, albums.title, albums.rating, albums.cover, artists.name, artists.description 
        FROM albums 
        JOIN artists ON albums.id_artist = artists.id
        WHERE albums.id = $albumID");
    $row = $query -> fetch_assoc();
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link href="css/style.css" rel="stylesheet">
    <title>Album-title</title>
    <script src="averColor.js"></script>
</head>
<body class="wFull">
    <div id="cover-bg">
        <img id="cover" src="img/covers/<?php echo $row[cover];?>" alt="Here was a picture"/>
        <h2 class="artist-name"><?php echo $row[name];?></h2>
        <img class="arrow" src="img/angle-down-solid.png" alt="arrow"/>
    </div>
    <div class="w600">
        <h1><?php echo $row[name];?></h1>
        <p class="description"> <?php echo $row[description];?> </p>
    </div>    
</body>
</html>