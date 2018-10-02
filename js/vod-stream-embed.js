// Video-on-demand Stream Video

var ipfs_gateway_self = 'https://ipfs.infura.io'; // IPFS gateway of this node
var ipfs_gateway_origin = 'https://ipfs.io'; // IPFS gateway of origin stream

var stream_type = 'video/mp4'; // Type of video stream
var stream_url_ipfs = 'https://ipfs.io/ipfs/'; // File path to stream with IPFS content via HTTP server
var stream_urls_http = []; // Optional list of URLs to stream over HTTP

// Replace IPFS gateway of origin with that of this node
stream_url_ipfs = stream_url_ipfs.replace(ipfs_gateway_origin, ipfs_gateway_self);

// Append IPFS content to stream URL
var ipfs_param = new URLSearchParams(window.location.search).get('ipfs');
if (ipfs_param) {
  stream_url_ipfs = stream_url_ipfs + ipfs_param;
}

// Add URL to stream over HTTP if available
var http_param = new URLSearchParams(window.location.search).get('http');
if (http_param) {
  stream_urls_http.push(http_param);
}
