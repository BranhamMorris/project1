//YouTube API call explore data explaining random method

var btnApiCallEl = $("#call-api");
var eduVideosContainer = $("#edu-coding-topics");

function youTubeApiCall() {


    var youTubeApiKey = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTNXca5Zhdc0uoAHGMGOEiw&maxResults=40&key=AIzaSyBivby0lJQWzk_xXjxxkxUjgMlfy65cbbM";

    fetch(youTubeApiKey)
    .then (function (response) {
        if (response.ok){
            response.json()
            .then (function(data){
                console.log(data);
                displayEduVideos(data);
            })
        }

        else {
            alert("404 Error: could not find");
        }
    })
    }


    function displayEduVideos(data) {
        for (var  i=0; i<data.items.length; i++) {
        var title = data.items[i].snippet.title;
        console.log(title);
        var videoId = data.items[i].id.videoId;
            if (title == "Creating Random Numbers in JavaScript" || title == "The Anatomy Of HTML Tags" || title == "Learn Headings in HTML"){
                var iframeEl = $("<iframe>").attr("class", "youtube-player video-container edu-videos").attr("id","player").attr("type", "text/html").attr("style", "width:300px height:150px").attr("src", "http://www.youtube.com/embed/" + videoId);
                eduVideosContainer.append(iframeEl);
                }
            }}

    btnApiCallEl.on("click", function(){
        youTubeApiCall();
    });
    


// background color generator component

var colorGeneratorContainer = $("#color-generator-container");
var switchBtnEl = $("#switch-color-btn");
function randomBackground(){
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);
    var opacity = (Math.random() * 1).toFixed(1);
    
    colorGeneratorContainer.attr("style","background-color: rgba(" + r + "," + g + "," + b + "," + opacity +")");
    
};

switchBtnEl.on("click",function(event){
    event.preventDefault();
    randomBackground()});
    



//motivational quotes API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d368c3e96mshe093caf1191f67bp18aea8jsn204c186e106d',
		'X-RapidAPI-Host': 'motivational-quotes-quotable-api.p.rapidapi.com'
	}
};

fetch('https://motivational-quotes-quotable-api.p.rapidapi.com/motivational_quotes', options)
.then (function (response) {
    if (response.ok){
        response.json()
        .then (function(data){
            console.log(data);
            var quote = data.quote
            var quoteEl = $("#quote").text(quote);
        })
    }

    else {
        alert("404 Error: could not find");
    }
})
