require 'html-proofer'

task :test do
  options = {
    cache: { timeframe: { external: '6M' } },
    ignore_status_codes: [429],
    ignore_urls: [/ipfs.io\/ipfs/]
  }
  HTMLProofer.check_directory('./_site', options).run
end

task :default => [:test]
