//inserting a YouTube video to the webpage

var YouTubeApiKey = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCOxqgCwgOqC2lMqC5PYz_Dg&key=AIzaSyDsBeULqXmY3viCXmBIU9KtifxDi9DnpLo";
var youTubecontainer = $("#youtube-video-container");



function YouTubeApiCall(YouTubeApiKey) {
fetch(YouTubeApiKey)
.then (function (response) {
    console.log(response);
    if (response.ok){
        response.json()
        .then (function(data){
            console.log(data);
            return data;
        
            
        })

    }
    else {
        alert("404 Error: could not find");
    }
})
}

YouTubeApiCall(YouTubeApiKey);