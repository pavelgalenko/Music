window.addEventListener("load", function(){    
    var picture = document.querySelector("#cover");
    makeShadow(picture);
});

function getAverageRGB(cover)
{
    var rgb = {r:0, g:0, b:0},
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        width,
        height,
        pixels,
        length,
        pixCount
    ;
    
    if(!ctx)
    {
        return rgb;
    }

    width = canvas.width = cover.offsetWidth; //присваиваем ширину обложки для ширины canvas
    height = canvas.height = cover.offsetHeight; //присваиваем высоту обложки для ширины canvas
    ctx.drawImage(cover, 0, 0); //функция для отрисовки изображения на canvas

    try 
    {
        pixels = ctx.getImageData(0, 0, width, height); //сохраняем в переменную значения всех пикселей изображения
    } 
    catch (error) 
    {
        return rgb;
    }
    length = pixels.data.length; //количество данных о всех пикселях в изображении: r, g, b и альфа-канал
    
    //определяем средний цвет для обложки
    for (var i = 0; i + 4 < length; i += 4)
    {
        rgb.r += pixels.data[i];
        rgb.g += pixels.data[i+1];
        rgb.b += pixels.data[i+2];
    }
    pixCount = length / 4; //количество пикселей в обложке
    rgb.r = ~~(rgb.r / pixCount); //двойное побитовое отрицание окргуляет до целого числа в меньшую сторону
    rgb.g = ~~(rgb.g / pixCount);
    rgb.b = ~~(rgb.b / pixCount);
    return rgb;
}

function makeShadow(picture)
{
    var rgb = getAverageRGB(picture);
    var prop; //переменная для накапливания цвета тени

    //формируем значения для свойста box-shadow
    prop = '0 0 200px 75px rgb(';
    prop += rgb.r + ',';
    prop += rgb.g + ',';
    prop += rgb.b + ')';
    picture.style.boxShadow = prop;
    console.log(prop);
}