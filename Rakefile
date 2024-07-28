require 'html-proofer'

task :test do
  options = {
    cache: { timeframe: { external: '6M' } },
    swap_urls: { %r{^https://ournetworks.ca} => "" },
    ignore_urls: [/ipfs.io\/ipfs/],
    ignore_files: [/posts/],
    typhoeus: {
      headers: { "User-Agent" => "Chrome/120.0.0.0 Safari/537.36" },
    }
  }
  HTMLProofer.check_directory('./_site', options).run
end

task :default => [:test]
