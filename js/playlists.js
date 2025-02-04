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
      },
      {
        uri: 'spotify:track:1DVHCvTwuwtZrpYDV4irH5', // Track 4
    }
    ];
    
    // Function to get responsive dimensions based on screen width
    const getResponsiveDimensions = () => {
      const screenWidth = window.innerWidth;
  
      if (screenWidth <= 600) {
        // Mobile devices
        return { width: '95%', height: '80' };
      } else if (screenWidth <= 1024) {
        // Tablets
        return { width: '300', height: '80' };
      } else {
        // Desktops
        return { width: '250', height: '80' };
      }
    };
  
    // Loop through track URIs to dynamically create embed iframes
    trackUris.forEach((track, index) => {
      const element = document.getElementById(`embed-iframe-${index}`); // Get the div by ID
  
      const options = {
        uri: track.uri,
        ...getResponsiveDimensions(), // Spread responsive dimensions into options
        view: 'coverart', // Change this if you want a different layout
      };
  
      const callback = (EmbedController) => {
        // Optional: Add any additional logic here
      };
  
      // Create the embed for the track
      IFrameAPI.createController(element, options, callback);
    });
  };