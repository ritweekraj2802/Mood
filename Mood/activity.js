var urls = 
[
    "https://www.youtube.com/embed/UAA3E5MLqrM",
    "https://www.youtube.com/embed/nFIfv-jIgbI",
    "https://www.youtube.com/embed/6fnLKyRJsrs",
    "https://www.youtube.com/embed/Tua2iYOjxpo",
    "https://www.youtube.com/embed/jOfshreyu4w",
    "https://www.youtube.com/embed/4Qrby31GU7I",
    "https://www.youtube.com/embed/UYMmtEFhuxA",
    "https://www.youtube.com/embed/KPWBUYpsWSY",
    "https://www.youtube.com/embed/w3C08dhJ_SM",
    "https://www.youtube.com/embed/7I4cKIK29O4"
]

function changeVideo()
{
let url =  urls[Math.floor(Math.random() * urls.length)]
console.log(url);
document.getElementById("youtube-video").setAttribute("src", url);
}
if (document.getElementById("youtube-video").getAttribute("src")==="")
    changeVideo();