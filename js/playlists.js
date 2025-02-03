window.onSpotifyIframeApiReady = (IFrameAPI) => {
  // Array of track URIs to embed
  const trackUris = [
      {
          uri: 'spotify:track:2ADSh3Mp744n2586tpUtIW', // Track 1
      },
      {
          uri: 'spotify:track:3be9ACTxtcL6Zm4vJRUiPG', // Track 2
      },
      {
          uri: 'spotify:track:07gUvSU765VtVbSoHPMHHO', // Track 3
      }
  ];

  // Loop through track URIs to dynamically create embed iframes
  trackUris.forEach((track, index) => {
      const element = document.getElementById(`embed-iframe-${index}`); // Get the div by ID

      const options = {
          uri: track.uri,
          width: '300',
          height: '80',
          view: 'coverart' // Change this if you want a different layout
      };

      const callback = (EmbedController) => {
          // Update the song details dynamically based on track URI
          // document.getElementById('song-title').textContent = track.title;
          // document.getElementById('song-artist').textContent = track.artist;
          // document.getElementById('album-cover').src = track.albumCover;
      };

      // Create the embed for the track
      IFrameAPI.createController(element, options, callback);
  });
};
