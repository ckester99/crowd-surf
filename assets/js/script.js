var artist;
//Global variables to store user IDs
const authToken = getAccessTokenFromUrl();
// ticketmaster API
$("#artist-search").on("click", function () {
  artist = $("#artist-input").val();
  getTracks(artist);
  $.ajax({
    type: "GET",
    //when spotify api is up this api will be dependent on pulling the performer to search their events as such:
    url:
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +
      artist +
      "-&countryCode=US&size=10&apikey=hMNJM8tD1PpcNAUBm6ZArJQt8MPJUpWy",
    async: true,
    dataType: "json",
    success: function (json) {
      console.log(json._embedded.events);
      let i = 0;
      $("#song-detail").empty()
      for (const showInfo of json._embedded.events) {
        if (i < 5) {
          let eventName = showInfo.name;
          console.log(eventName);
          let eventDate = showInfo.dates.start.localDate;
          let eventTime = showInfo.dates.start.localTime;
          let contentHTML = `
                <div class="flex text-center justify-center p-5">
    <div class="block p-6 rounded-lg shadow-lg bg-gray-300 max-w-md">
      <h5 class="text-teal-500 text-xl leading-tight font-medium mb-2">
        Tour Name: ${eventName}
      </h5>
      <p class="text-teal-700 text-lg mb-4">Date: ${eventDate}</p>
      <p class="text-teal-700 text-lg mb-4">Time: ${eventTime}</p>
    </div>
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
  });
});

$("#song-detail-2 #user-notes").val(localStorage.getItem("song-detail-2"));

// create modal for instructions

let modal = document.getElementById("modal-overlay");

let btn = document.getElementById("instruct-modal");

let button = document.getElementById("close-modal");

// Will open modal when clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// Will close modal when clicked
button.onclick = function () {
  modal.style.display = "none";
};

// Will close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Spotify API
const searchArtist = async (artistString) => {
  const url = `https://api.spotify.com/v1/search?q=${artistString}&type=artist&limit=1`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  });
  const artistData = await response.json();
  console.log(artistData.artists.items[0].id);
  return await artistData.artists.items[0].id;
};

const getTracks = async (artist) => {
  const artistId = await searchArtist(artist);
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  });
  const artistTopTracks = await response.json();
  console.log(artistTopTracks);
  // update html
  for (let index = 0; index < 5; index++) {
    const element = artistTopTracks.tracks[index];
    $(`#song-${index + 1}`).text(element.name)
  }
  return artistTopTracks;
};

// Spotify Auth
// Creates Spotify authentication link, redirects there, and sends the user back
function spotifyAuth() {
  //Application ID for Spotify
  var client_id = "c606a7901ceb4201a0fd0ae55d3b4831";
  var redirect_uri = "http://127.0.0.1:5500/";

  //Permissions
  var scope = "user-read-private user-read-email";

  //Builds authentication URL
  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  window.location.replace(url);
}
// Gets full hash info from URL and splits out the access token
function getAccessTokenFromUrl() {
    if (!window.location.hash) {
        spotifyAuth();
    }
    var hash = window.location.hash.substring(1);
    var hash1 = hash.split('=')[1];
    var hash2 = hash1.split('&')[0];
    return hash2;
}