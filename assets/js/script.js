var artist; 
// function getBoredResponse() {
//   // chart.artists.get?page=1&page_size=3&country=it

//   // var spotifyAuthToken = 'BQA6Ibri0327o0YIhdgBapB8VvZ6CgJxoaz_84iXy9iF65Hz4dEg2eaElf7NJYEgSCeXFD9aZ0J2a2cuEodWYgbh3q0PlUQ09hMx7R2GdjCvvFvEziKzmKkYOuMp2IN-UlynME7e4Ayr19XObNbLY7zNevsmD90-tDCpSzGUeSOrNCA';
  var requestUrl = 'http://www.boredapi.com/api/activity?participants=1';
  
  // AJAX call requires a third party library, jQuery
  $.ajax({
    type: "GET",
    
    url: requestUrl,
    async: true,
    dataType: "json", 
    success: function (json) {
      console.log(json.activity, json.type, json.participants);
    }
    //   console.log(response.status);
  });
  // ticketmaster API
  $("#artist-search").on("click", function(){
    artist = $("#artist-input").val();
    $.ajax({
        type: "GET",
        //when spotify api is up this api will be dependent on pulling the performer to search their events as such:
        // "https://app.ticketmaster.com/discovery/v2/events.json?keyword=Adele-&countryCode=US&size=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy"
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + artist + "-&countryCode=US&size=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy",
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json._embedded.events);
            let i = 0;
            for (const showInfo of json._embedded.events) {
                if (i < 5) {
                    let eventName = showInfo.name;
                    console.log(eventName);
                    let eventDate = showInfo.dates.start.localDate;
                    let eventTime = showInfo.dates.start.localTime;
                    let contentHTML = `
                <div class="p-4 card text-lg">
                <h3>Tour Name: ${eventName}</h3>
                <p>Date: ${eventDate}</p>
                <p>Time: ${eventTime}</p>
                </div>
                `;
                    $("#song-detail").append(contentHTML);
                    i++;
                }
            }
            // Parse the response.
        },
        error: function (xhr, status, err) {},
    });

// save comments to local storage
$("#save-btn").on("click", function () {
    var userInput = $(this).siblings("#user-notes").val();
    var userDesc = $(this).parent().attr("id");
    localStorage.setItem(userDesc, userInput);
})
});

$("#song-detail-2 #user-notes").val(localStorage.getItem("song-detail-2"));

// create modal for instructions

let modal = document.getElementById("modal-overlay");

let btn = document.getElementById("instruct-modal");

let button = document.getElementById("close-modal");

// Will open modal when clicked
btn.onclick = function() {
    modal.style.display = "block";
    }

    // Will close modal when clicked
button.onclick = function() {
    modal.style.display = "none";
    }

// Will close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}
        







// getBoredResponse();

