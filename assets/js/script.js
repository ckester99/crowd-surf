$ .ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=coldwarkids&countryCode=US&limit=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy",
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


