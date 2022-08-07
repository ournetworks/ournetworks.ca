# ournetworks.ca

[![Jekyll CI](https://github.com/ournetworks/ournetworks.ca/actions/workflows/ci.yml/badge.svg)](https://github.com/ournetworks/ournetworks.ca/actions/workflows/ci.yml)

This repository holds the source code and static assets of [ournetworks.ca](http://ournetworks.ca), built with [Jekyll](https://jekyllrb.com/), [Normalize.css](http://necolas.github.io/normalize.css/), and icons from [Font Awesome](http://fontawesome.io/). Previous releases have included video stream source code from [Toronto Mesh](https://github.com/tomeshnet/ipfs-live-streaming/) and [Video.js](https://videojs.com), graphic assets from [IPFS](https://github.com/ipfs/artwork) and loading animation from [jxnblk/loading](https://github.com/jxnblk/loading).

Logo by [Marlo Yarlo](http://www.marloyarlo.com/).

## License & Copyright

Copyright (C) 2022 garrying, dcwalk, benhylau, sarah, patcon, eloisa, mauve, amelia

Ournetworks.ca **code** at [ournetworks/ournetworks.ca](https://github.com/ournetworks/ournetworks.ca/) is licensed under a [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl.html). This program is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License](https://www.gnu.org/licenses/gpl.html) as published by the Free Software Foundation, version 3.0. A copy is distributed with the code at [`LICENSE.md`](./LICENSE.md).

Unless otherwise indicated, State of Our Networks **content and documentation** is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). _State of Our Networks 2017 Mini-Conference_ content is by [Toronto Mesh](https://tomesh.net/).

## Development
1. Clone repository: `git clone https://github.com/ournetworks/ournetworks.ca.git && cd ournetworks.ca`
2. Install Bundler gem: `gem install bundler`
3. Install dependancies: `bundle install`
4. Run locally: `bundle exec jekyll serve`
5. Visit your `localhost` on port `4000`: http://localhost:4000 or http://127.0.0.1:4000

## Deployment

- We auto-deploy `main` branch to
  [`ournetworks.ca`](https://ournetworks.ca) via GitHub Actions.
  (See [`.github/workflows/deploy.yml`](https://github.com/ournetworks/ournetworks.ca/blob/main/.github/workflows/deploy.yml))
