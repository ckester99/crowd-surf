$ .ajax({
    type:"GET",
    //when spotify api is up this api will be dependent on pulling the performer to search their events as such:
    // "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + "&countryCode=US&size=10&apikey={}"
    //API Key is stored in .gitignor
    url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=Adele-&countryCode=US&size=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy",
    async:true,
    dataType: "json",
    success: function(json) {
        console.log(json);
            // Parse the response.
        // console.log(response.status); 
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });


