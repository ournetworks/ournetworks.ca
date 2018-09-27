var live = videojs('live');

// For any browser except Safari
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) === false) {
  // Override native player for platform and browser consistency
  videojs.options.html5.nativeAudioTracks = false;
  videojs.options.html5.nativeVideoTracks = false;
  videojs.options.hls.overrideNative = true;
}

function httpStream() {
  live.src({
    src: stream_urls_http[Math.floor(Math.random() * stream_urls_http.length)],
    type: stream_type
  });
  loadStream();
}

function ipfsStream() {
  live.src({
    src: stream_url_ipfs,
    type: stream_type
  });
  loadStream();
  videojs.Hls.xhr.beforeRequest = function(options) {
    // Replace IPFS gateway of origin with that of this node
    options.uri = options.uri.replace(ipfs_gateway_origin, ipfs_gateway_self);
    if (options.uri.indexOf('/ipfs/')) {
      document.getElementById('loadingTitle').innerHTML = 'Located stream via IPFS';
      document.getElementById('msg').innerHTML = 'Downloading video content...';
    }
    console.debug(options.uri);
    return options;
  };
}

function loadStream() {
  document.getElementById('LoadingStream').style.display = 'block';
  document.getElementById('SelectStream').style.display = 'none';
}

document.querySelector('.ipfs-stream').addEventListener('click', function(event) {
  ipfsStream();
});

document.querySelector('.http-stream').addEventListener('click', function(event) {
  httpStream();
});

live.metadata = 'none';

live.on('loadedmetadata', function() {
  document.getElementById('StreamSelector').style.display = 'none';
});

live.on('loadeddata', function(event) {
  console.debug(event);
});

var refreshButton = document.createElement('button');
refreshButton.className = 'button button-primary compact stream-refresh';
refreshButton.innerHTML = 'Refresh Page and Try Again';
refreshButton.addEventListener('click', function() {
  window.location.reload(true);
});

live.on('error', function(event) {
  console.debug(this.error());
  document.getElementById('loadingTitle').innerHTML = 'Unable to load live stream';
  document.querySelector('.loader-animation').style.display = 'none';
  document.getElementById('msg').innerHTML = this.error().message;
  document.getElementById('LoadingStream').appendChild(refreshButton);
});

if (!stream_urls_http || !Array.isArray(stream_urls_http) || (stream_urls_http.length === 0)) {
  document.querySelector('.http-stream').setAttribute('disabled', 'disabled');
}
