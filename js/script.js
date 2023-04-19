//YouTube API call

var apiKey = "AIzaSyDsBeULqXmY3viCXmBIU9KtifxDi9DnpLo";
var YouTubeApiKey = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=searchSortUnspecified&publishedAfter=2020-01-01T00%3A00%3A00Z&q=random%20method%20java%20script%20kids&key=AIzaSyDsBeULqXmY3viCXmBIU9KtifxDi9DnpLo";



function YouTubeApiCall(YouTubeApiKey) {
    fetch(YouTubeApiKey)
    .then (function (response) {
        if (response.ok){
            response.json()
            .then (function(data){
                console.log(data);
            })
        }
        else {
            alert("404 Error: could not find");
        }
    })
    }



    YouTubeApiCall(YouTubeApiKey);
    
    

// background color generator component

var colorGeneratorContainer = $("#color-generator-container");
var switchBtnEl = $("#switch-color-btn");
function randomBackground(){
    var r = Math.ceil(Math.random() * 255);
    console.log(r);
    var g = Math.ceil(Math.random() * 255);
    console.log(g);
    var b = Math.ceil(Math.random() * 255);
    console.log(b);
    var opacity = (Math.random() * 1).toFixed(1);
    console.log(opacity);
    
    colorGeneratorContainer.attr("style","background-color: rgba(" + r + "," + g + "," + b + "," + opacity +")");
    
};

switchBtnEl.on("click",function(event){
    event.preventDefault();
    randomBackground()});
    
    
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

