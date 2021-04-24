var wakeuptime = 6;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP5NKsGbiSozzYwf3AE94XzbOi7eBpCncvw&usqp=CAU";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0Jj2iQ_Tb8fkteyTy5L7jqAYzN3G1Wyz7A&usqp=CAU";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://image.shutterstock.com/shutterstock/photos/358293773/display_1500/stock-vector-lunch-time-lettering-358293773.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://www.cpap.co.uk/wp/wp-content/uploads/2020/06/oversleep.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://mymodernmet.com/wp/wp-content/uploads/2020/08/smiley-face-history-0.jpg";
    messageText = " Hola!! Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvCLPYqDp9yeN38LV2j2C4oE4R1VSaBGp_w&usqp=CAU";
    messageText = "It's Eve...!";
  }
  else
  {
    image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2FilVYjf0J378&psig=AOvVaw1xEDfgBgRQJJ0oKOqzsh-E&ust=1619260380660000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjziZ6VlPACFQAAAAAdAAAAABAI";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);