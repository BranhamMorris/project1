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

// daily inspirational quotes API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d368c3e96mshe093caf1191f67bp18aea8jsn204c186e106d',
		'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};

fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));