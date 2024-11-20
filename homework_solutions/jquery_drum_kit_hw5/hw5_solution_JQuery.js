$(document).ready(function() {console.log("Document is ready!");});

let charToDrumMap = {"w": "crash", "a": "kick-bass","s":"snare", "d": "tom-1",
    "j": "tom-2", "k": "tom-3", "l": "tom-4"};

// Add keydown function for pressing keys and getting sounds
$(document).keydown(function(event){keyToSound(event.key)});

// Add click function for clicking on drum and getting sounds
$("button").click( function() {
    addAnimation($(this).text());
    let audio = new Audio("sounds/"+charToDrumMap[$(this).text()]+".mp3"); 
    audio.play();
    });

// Add images for the drums
addImages();


// functions used 
function addImages()
{
    let images={".w": "crash",".a": "kick",".s":"snare",".d": "tom1",
        ".j": "tom2",".k": "tom3",".l": "tom4"};
    for (let charKey in images)
    {
        let imageName = "images/"+images[charKey]+".png";
        $(charKey).css("background-image","url("+imageName+")");
    }   
}


function keyToSound(keyChar)
{
    addAnimation(keyChar);
    let audio = new Audio("./sounds/"+charToDrumMap[keyChar]+".mp3");
    audio.play();
}


function addAnimation(drum)
{
    $("."+drum).addClass("pressed");
    setTimeout(function(){$("."+drum).removeClass("pressed");}, 100);
}