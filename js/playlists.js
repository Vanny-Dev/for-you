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
      return { width: '92%', height: '80' };
    } else if (screenWidth <= 1024) {
      // Tablets
      return { width: '300', height: '80' };
    } else {
      // Desktops
      return { width: '350', height: '80' };
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

document.addEventListener('DOMContentLoaded', () => {
  interact('.player-card').draggable({
    manualStart: false,
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: '.track-container',
        endOnly: true
      })
    ],
    autoScroll: false,
    listeners: {
      move: dragMoveListener,
      end(event) {
        event.target.style.transition = 'all 0.3s ease-out';
      }
    }
  });

  function dragMoveListener(event) {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = `translate(${x}px, ${y}px)`;
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
});