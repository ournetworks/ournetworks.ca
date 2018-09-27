// Live Stream Video

var ipfs_gateway_self = 'https://ipfs-gateway.live.mesh.world'; // IPFS gateway of this node
var ipfs_gateway_origin = 'https://ipfs-gateway.mesh.world'; // IPFS gateway of origin stream

var stream_type = 'application/x-mpegURL'; // Type of video stream
var stream_url_ipfs = 'https://live.mesh.world/live.m3u8'; // File path to stream with IPFS content via HTTP server
var stream_urls_http = ['https://stream.aseriesoftubez.com/hls/tomesh/ournetworks.m3u8']; // Optional list of URLs to stream over HTTP