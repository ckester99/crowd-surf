$ .ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=coldwarkids&countryCode=US&limit=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });


//   https://app.ticketmaster.com/discovery/v2/events.json?keyword=coldwarkids&countryCode=US&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy


//   https://app.ticketmaster.com//discovery/v2/classifications/{keyword}.json?size=1&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy