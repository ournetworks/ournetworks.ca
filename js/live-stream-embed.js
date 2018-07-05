// Live Stream Video

var ipfs_gateway_self = 'http://ipfs-mirror-0.mesh.world:8080';  // IPFS gateway of this node
var ipfs_gateway_origin = 'http://ipfs-mirror-0.mesh.world:8080';  // IPFS gateway of origin stream
var m3u8_ipfs = 'http://ipfs-mirror-0.mesh.world/live.m3u8';  // File path to m3u8 with IPFS content via HTTP server
// var m3u8_ipfs='__IPFS_GATEWAY_ORIGIN__/ipns/__IPFS_ID_ORIGIN__';  // URL to m3u8 via IPNS (uncomment to enable)
var m3u8_http_urls = ['http://ipfs-mirror-0.mesh.world/live.m3u8'];  // Optional list of URLs to m3u8 over HTTP

var live = videojs('live');

function httpStream() {
  live.src({
    src: m3u8_http_urls[Math.floor(Math.random() * m3u8_http_urls.length)],
    type: 'application/x-mpegURL',
  });
  loadStream();
}

function ipfsStream() {
  live.src({
    src: m3u8_ipfs,
    type: 'application/x-mpegURL',
  });
  loadStream();
  videojs.Hls.xhr.beforeRequest = function(options) {
    // Replace IPFS gateway of origin with that of this node
    options.uri = options.uri.replace(ipfs_gateway_origin, ipfs_gateway_self);
    if (options.uri.indexOf('/ipfs/')) {
      document.getElementById('loadingTitle').innerHTML='Located stream via IPNS'
      document.getElementById('msg').innerHTML='Downloading video content...'
    }
    console.debug(options.uri);
    return options;
  };
}

function loadStream() {
  document.getElementById('LoadingStream').style.display = 'block';
  document.getElementById('SelectStream').style.display='none';
}

document.querySelector('.ipfs-stream').addEventListener('click', function(event){
  ipfsStream();
});

document.querySelector('.http-stream').addEventListener('click', function(event){
  httpStream();
});

live.metadata='none';

live.on('loadedmetadata', function() {
  document.getElementById('StreamSelecter').style.display = 'none';
});

live.on('loadeddata', function(event) {
  console.debug(event);
});

live.on('error', function(event) {
  console.debug(this.error());
  document.getElementById('loadingTitle').innerHTML = 'Unable to load live stream'
  document.querySelector('.loader-animation').style.display = 'none';
  document.getElementById('msg').innerHTML = this.error().message;
});

if (!m3u8_http_urls || !Array.isArray(m3u8_http_urls) || (m3u8_http_urls.length==0)) {
  document.getElementById('httpStream').style.display = 'none';
}
