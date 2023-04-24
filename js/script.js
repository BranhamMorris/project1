//YouTube API call explore data explaining random method

var eduVideosContainer = $("#edu-coding-topics").attr("class" , "col p-12 g-4 py-5 row-col-1 row-col-md-2");


function youTubeApiCall() {


    var youTubeApiKey = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTNXca5Zhdc0uoAHGMGOEiw&maxResults=40&key=AIzaSyBmXIYgbfQymw5bPQbNaSaPkJucq1Ld5Do";


    fetch(youTubeApiKey)
    .then (function (response) {
        if (response.ok){
            response.json()
            .then (function(data){
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
            if (title == "Creating Random Numbers in JavaScript" || title == "The Anatomy Of HTML Tags" || title == "Learn Headings in HTML" || title == "Understanding Modulo In JavaScript | %"){
                var iframeEl = $("<iframe>").attr("class", "youtube-player video-container edu-videos").attr("id","player").attr("type", "text/html").attr("style", "width:100% height:150px").css("margin","4px").attr("src", "http://www.youtube.com/embed/" + videoId);
                eduVideosContainer.append(iframeEl);
                var resourcesEl = $("#resources").attr("class", "container");
                resourcesEl.append(eduVideosContainer);
                }
            }}
            youTubeApiCall()


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

//Memory Card Game---------------------------------------------------------------------------------//

    //Card Flip Function//

    //Making list of all cards and storing the value//
    var cards = document.querySelectorAll(".card")                  
    //determining if it is the first or second click for the pairing//
    var flippedCard = false;                                        
    var firstCard, secondCard;   
    //locks the board so only a pair of cards can be selected//                                   
    var locked = false;                                             
    
    //Assigning how the function of flipping a card will work//
    function flipCard() {
        if (locked) return;
        //add flip to every card class with "this"//
        this.classList.add("flip");  
        //statement for first click, sets firstCard to card class(this)//                               
        if (!flippedCard) {                                          
            flippedCard = true;
            firstCard = this;
        //second click//
        } else {
            flippedCard = false;
            secondCard = this;
            //Matching cards, gave each desired pair of card class a data id, if when 2 cards are clicked and they have same value then they are removed from list(removeEventListener)//
            if (firstCard.dataset.id === secondCard.dataset.id) {
                firstCard.removeEventListener("click", flipCard);
                secondCard.removeEventListener("click", flipCard);
            //If its not a match then the cards are flipped back over by removing the flip with (removeEventListener)//
            } else {
                locked = true;
                setTimeout(() => {
                    firstCard.classList.remove("flip");
                    secondCard.classList.remove("flip");
                    locked = false;
                }, 2000)
                
            }
            
        }
    }
    //Function mix the cards up as someone enters the site using IIFE immediately invoked function expression//
    (function mixing() {
        cards.forEach(card => {
            var assigningCards = Math.floor(Math.random() * 16);
            card.style.order = assigningCards;
        });
    })();
    
    //looping through each card(addEventListener) looking a click and when that happens it will flip the card//
    cards.forEach(card => card.addEventListener("click", flipCard));  
