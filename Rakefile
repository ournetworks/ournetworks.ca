require 'html-proofer'

task :test do
  options = {
    check_html: true,
    allow_hash_href: true,
    internal_domains: ['ournetworks.ca'],
    hydra: { max_concurrency: 12 },
    http_status_ignore: [999]
  }
  HTMLProofer.check_directory('./_site', options).run
end

task :default => [:test]
