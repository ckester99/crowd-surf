// var apiKey = "hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy";
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
      for (const showInfo of json._embedded.events) {
        let eventName = showInfo.name;
        console.log(eventName);
        let eventDate = showInfo.dates.initialStartDate.localDate;
        let eventTime = showInfo.dates.initialStartDate.localTime;
        let contentHTML = `
                <div class="p-4 card">
                <h3>${eventName}</h3>
                <p>${eventDate}</p>
                <p>${eventTime}</p>
                </div>
                `;
        $("#song-detail").append(contentHTML);
      }
      // Parse the response.
    },
    error: function (xhr, status, err) {},
  });
}
eventResults();

// var spotifyApiKey = 'BQDgsQaBR5YLd3eT4c5L3kEAPqnRTlPlgmGMxcqT7acLcpjHdsCzE9g0RKZVDSuzu9SIN_VW6kElRxrfjNzZOuF5bckqcnwKWIC2GDX';
function getSpotifyResults() {
  $.ajax[{
    type: "GET",
    url: "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks",
    async: true, 
    dataType: "json",
    authorization: 'BQDgsQaBR5YLd3eT4c5L3kEAPqnRTlPlgmGMxcqT7acLcpjHdsCzE9g0RKZVDSuzu9SIN_VW6kElRxrfjNzZOuF5bckqcnwKWIC2GDX',
    success: function (json) {
      console.log(json.total.limit)

    }
  }]
 
}

// save comments to local storage 
$("#save-btn").on('click',function () {
    var userInput = $(this).siblings('#user-notes').val();
    var userDesc = $(this).parent().attr('id');
    localStorage.setItem(userDesc,userInput);
  });
 $("#song-detail-2 #user-notes").val(localStorage.getItem("song-detail-2"))


