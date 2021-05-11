// Process URL params
function getURLParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

var ipfs_gw = getURLParam('gw');                          // Set custom IPFS gateway
var vod_ipfs = getURLParam('vod') || getURLParam('ipfs'); // Set IPFS content hash of mp4 file to play IPFS on-demand video stream ('ipfs' for backward compatability)
var start_from = getURLParam("from");                     // Timecode to start video playing from

// Configure default playback behaviour
var stream_type = 'application/x-mpegURL'; // Type of video stream

if (ipfs_gw) {
  ipfs_gateway = ipfs_gw;
}

if (vod_ipfs) {
  stream_type = 'video/mp4';
  stream_url_ipfs = ipfs_gateway + '/ipfs/' + vod_ipfs;
  document.getElementById('selectingTitle').innerHTML = 'Select recorded stream source';
}

// Configure video player
var live = videojs('live', { liveui: true });

// Override native player for platform and browser consistency
videojs.options.html5.nativeAudioTracks = false;
videojs.options.html5.nativeVideoTracks = false;
videojs.options.hls.overrideNative = true;

// Counter to track video playback state
var streamState = 0;

function ipfsStream() {
  live.src({
    src: stream_url_ipfs,
    type: stream_type
  });
  loadStream();
  videojs.Hls.xhr.beforeRequest = function(options) {

    // When .m3u8 is loaded, start playback and transition to streamState = 1
    if (options.uri.indexOf('.m3u8') > 0) {
      if (!streamState) {
        live.play();
        streamState = 1;
      }
    }

    if (options.uri.indexOf('/ipfs/') > 0) {
      document.getElementById('loadingTitle').innerHTML = 'Located stream via IPFS';
      document.getElementById('msg').innerHTML = 'Downloading video content...';
      // Use specified IPFS gateway by replacing it in the uri
      options.uri = ipfs_gateway + options.uri.substring(options.uri.indexOf('/ipfs/'));

      // Wait for two .ts chunks to be loaded before applying seek action
      if (streamState < 3) {
        streamState++;
        if (streamState == 3) {
          if (!start_from) {
            // Seek to live after waiting 1 s
            setTimeout(function() { live.liveTracker.seekToLiveEdge(); }, 1);
          } else {
            // Seek to start_from time after waiting 1 s
            setTimeout(function() { live.currentTime(start_from); }, 1);
          }
        }
      }
    }

    if (options.uri.indexOf('/ipns/') > 0) {
      document.getElementById('loadingTitle').innerHTML = 'Located stream via IPFS';
      document.getElementById('msg').innerHTML = 'Downloading video content...';
      options.uri = ipfs_gateway + options.uri.substring(options.uri.indexOf('/ipns/'));
    }
    console.debug(options.uri);
    return options;
  };
}

function loadStream() {
  document.getElementById('loadingStream').style.display = 'block';
  document.getElementById('selectStream').style.display = 'none';
}

ipfsStream();

live.metadata = 'none';

live.on('loadedmetadata', function() {
  document.getElementById('streamSelector').style.display = 'none';
});

live.on('loadeddata', function(event) {
  console.debug(event);
});

var refreshButton = document.createElement('button');
refreshButton.className = 'button button-primary compact stream-refresh';
refreshButton.innerHTML = 'Refresh page and try again';
refreshButton.addEventListener('click', function() {
  window.location.reload(true);
});

live.on('error', function(event) {
  console.debug(this.error());
  document.getElementById('loadingTitle').innerHTML = 'Unable to load video stream';
  document.querySelector('.loader-animation').style.display = 'none';
  document.getElementById('msg').innerHTML = this.error().message;
  document.getElementById('loadingStream').appendChild(refreshButton);
});
