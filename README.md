# ournetworks.ca

[![Build Status](https://travis-ci.org/ournetworks/ournetworks.ca.svg?branch=master)](https://travis-ci.org/ournetworks/ournetworks.ca)

This repository holds the source code and static assets of [ournetworks.ca](http://ournetworks.ca), built with [Jekyll](https://jekyllrb.com/), [Normalize.css](http://necolas.github.io/normalize.css/), and icons from [Font Awesome](http://fontawesome.io/). Live stream graphic assets from [IPFS](https://github.com/ipfs/artwork) and loading animation from [jxnblk/loading](https://github.com/jxnblk/loading).

Logo by [Marlo Yarlo](http://www.marloyarlo.com/). [2019 design concept](https://github.com/ournetworks/artwork) by Amelia Zhang.

**State of Our Networks 2019** organizing materials and planning can be found in the [2019 planning repository](https://github.com/ournetworks/2019).

## License & Copyright

Copyright (C) 2019 garrying, dcwalk, patcon, sarah, benhylau, eloisa

Ournetworks.ca **code** at [ournetworks/ournetworks.ca](https://github.com/ournetworks/ournetworks.ca/) is licensed under a [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl.html). This program is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License](https://www.gnu.org/licenses/gpl.html) as published by the Free Software Foundation, version 3.0. A copy is distributed with the code at [`LICENSE.md`](./LICENSE.md).

Unless otherwise indicated, State of Our Networks **content and documentation** is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). _State of Our Networks 2017 Mini-Conference_ content is by [Toronto Mesh](https://tomesh.net/).

## Development
1. Clone repository: `git clone https://github.com/ournetworks/ournetworks.ca.git && cd ournetworks.ca`
2. Install Bundler gem: `gem install bundler`
3. Install dependancies: `bundle install`
4. Run locally: `bundle exec jekyll serve`
5. Visit your `localhost` on port `4000`: http://localhost:4000 or http://127.0.0.1:4000

## Deployment

- We auto-deploy `master` branch to
  [`ournetworks.ca`](https://ournetworks.ca) via Travis CI.
  (See [`.travis.yml`](https://github.com/ournetworks/ournetworks.ca/blob/master/.travis.yml#L22-L30))

### Deploying to Dat

Ournetworks.ca is avaliable on [Dat](https://dat.foundation/) and can be visited via [Beaker Browser](https://beakerbrowser.com/):
- `dat://eae17983cd6833287ab10ff4c1a3ca5d9ae7af7049eaa525912950720ece2e49/`
- `dat://ournetworks.ca/`

Generally, the following steps occur in Travis CI as updates are commited, or merged, into `master` branch:
- Install Dat command line tool: `npm install -g dat`
- Clone Dat archive: `dat clone [dat address] [destination folder] --exit`
- Build site (via Jekyll): `bundle exec jekyll build`
- `cd [destination folder]`
- Import the archive's secret key: `dat keys import`
- Update archive: `dat sync`
