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
                <h3>${eventName}</h3>
                <p>${eventDate}</p>
                <p>${eventTime}</p>
                `;
        $("#song-detail").append(contentHTML);
      }
      // Parse the response.
    },
    error: function (xhr, status, err) {},
  });
}
eventResults();
