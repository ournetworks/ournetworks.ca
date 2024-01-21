require 'html-proofer'

task :test do
  options = {
    cache: { timeframe: { external: '6M' } },
    ignore_status_codes: [429],
    swap_urls: { %r{^https://ournetworks.ca} => "" },
    ignore_urls: [/ipfs.io\/ipfs/],
    typhoeus: {
      headers: { "User-Agent" => "Chrome/120.0.0.0 Safari/537.36" },
    }
  }
  HTMLProofer.check_directory('./_site', options).run
end

task :default => [:test]
