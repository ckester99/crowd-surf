
function getBoredResponse() {
  
  // var spotifyAuthToken = 'BQA6Ibri0327o0YIhdgBapB8VvZ6CgJxoaz_84iXy9iF65Hz4dEg2eaElf7NJYEgSCeXFD9aZ0J2a2cuEodWYgbh3q0PlUQ09hMx7R2GdjCvvFvEziKzmKkYOuMp2IN-UlynME7e4Ayr19XObNbLY7zNevsmD90-tDCpSzGUeSOrNCA';
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

  }

$("#artist-search").on("click", function(e){
    e.preventDefault();
    var artist = $("#artist-input").val();
    $("#artist-input").val("");
    console.log(artist);
})

function eventResults() {
    $.ajax({
        type: "GET",
        //when spotify api is up this api will be dependent on pulling the performer to search their events as such:
        // "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + "&countryCode=US&size=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy"psmpr
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=Adele-&countryCode=US&size=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy",
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json._embedded.events);
            //   console.log(response.status);
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
}
eventResults();
getBoredResponse();

// save comments to local storage
$("#save-btn").on("click", function () {
    var userInput = $(this).siblings("#user-notes").val();
    var userDesc = $(this).parent().attr("id");
    localStorage.setItem(userDesc, userInput);
});
$("#song-detail-2 #user-notes").val(localStorage.getItem("song-detail-2"));
