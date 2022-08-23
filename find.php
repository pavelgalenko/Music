<?php
    require_once('connection.php');
    $answer=array(); //array for answer

    if(isset($_POST[findText])) //check variable !=null
    {
        $ft = htmlspecialchars($_POST[findText]);

        $query = $connection -> query("SELECT albums.id, albums.title, albums.rating, albums.cover, artists.name
            FROM albums 
            JOIN artists ON albums.id_artist = artists.id
            WHERE albums.title LIKE '%$ft%'"
        );
        
        while($row = $query -> fetch_assoc())//add data from $row in array
        {
            $answer[] = $row;
        }
    }
    echo json_encode($answer); //parse answer for js
?>