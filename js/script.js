//YouTube API call explore data explaining random method

var btnApiCallEl = $("#call-api");


function youTubeApiCall() {

    var youTubeApiKey = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTNXca5Zhdc0uoAHGMGOEiw&key=AIzaSyBivby0lJQWzk_xXjxxkxUjgMlfy65cbbM";

    fetch(youTubeApiKey)
    .then (function (response) {
        if (response.ok){
            response.json()
            .then (function(data){
                console.log(data);
                // DisplayRandomMethodeVideo(data);
            })
        }
        else {
            alert("404 Error: could not find");
        }
    })
    }

    btnApiCallEl.on("click", function(){
        youTubeApiCall();
    });
    

    // function DisplayRandomMethodeVideo (data){
    //         $("<iframe>").attr("class", "youtube-player video-container").attr("id","player").attr("type", "text/html").attr("src", "http://www.youtube.com/embed/" + i);
    // }


    

//YouTube API call exploring data regarding css color and background color choice    
    

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

