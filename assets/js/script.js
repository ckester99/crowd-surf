
var spotifyAccessToken = 'BQDvhECod1TsUnLgGncLbiKtXmcAuB3SVi4gb5B4jmY97XwYXdK2vobd2ZdedqIKJJvhaLXRCooAL5OtVquizKWH1LVjiSmgoCdxddMj5kGNW7AVhnXl5eMTNS8u';
var requestUrl = "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=5&apikey=BQDvhECod1TsUnLgGncLbiKtXmcAuB3SVi4gb5B4jmY97XwYXdK2vobd2ZdedqIKJJvhaLXRCooAL5OtVquizKWH1LVjiSmgoCdxddMj5kGNW7AVhnXl5eMTNS8u";
function getSpotifyResults() {
 
  $.ajax({
    type: "GET",
    url: requestUrl,
    async: true, 
    dataType: "json",
    // headers: {
		// 	'Authorization': 'Bearer ' + spotifyAccessToken
		// },
    success: function (json) {
      console.log(response);

    }
  });
 
}



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



// save comments to local storage 
$("#save-btn").on('click',function () {
    var userInput = $(this).siblings('#user-notes').val();
    var userDesc = $(this).parent().attr('id');
    localStorage.setItem(userDesc,userInput);
  });
 $("#song-detail-2 #user-notes").val(localStorage.getItem("song-detail-2"))


