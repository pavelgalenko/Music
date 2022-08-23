window.addEventListener('load', function(){
    findAlbums(); //call function when html code of the page loaded, output ALL albums from database, cause $ft in find.php is empty
    document.querySelector('#find-field').addEventListener('input', findAlbums); //callback function findAlbums, when $ft in find.php is not empty
});

function findAlbums()
{
    var findText = document.querySelector('#find-field').value; //init var from find field on index.php
    findText = encodeURIComponent(findText); //encode in URI
    var xhr = new XMLHttpRequest(); //create XMLHttpRequest
    xhr.open('POST', 'find.php'); //choose method and file for xhr
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //set content type

    xhr.onreadystatechange = function()
    {
        if(xhr.readyState === 4 && xhr.status === 200) //check the request is ok
        {
            var answer = JSON.parse(xhr.responseText); //parse the answer from server
            var readyBlock = ''; //var for output
            
            for(const item of answer)
            {
                readyBlock += `
                <div class="album">
                    <div class="album-image">
                        <a href="album.php?id=${item.id}">
                            <img src="img/covers/${item.cover}" alt="album-image"/>
                        </a>
                    </div>
                    <div class="rating r-${item.rating}"></div>
                    <h3>
                        <a href="album.php?id=${item.id}">${item.title}</a>
                    </h3>
                    <h4>
                        <a href="#">${item.name}</a>
                    </h4>
                </div>
                `;
            }
            document.querySelector('#albums').innerHTML=readyBlock; //add row inside the block 'albums' and output on the page
        }
    }
    xhr.send('findText='+findText); //send a request
}