# nushrinrashidian.com

The personal/professional website of Nushin Rashidian.

## Setup

Three things make it possible for this site to run. With this setup, the site
itself is hosted on Cloudflare and GitHub for free but allows the site owner to
edit the content without hosted CMS software.

- [Decap CMS](https://decapcms.org) is used for the CMS. It's a JavaScript
  application that edits files and saves the file changes as commits to GitHub.
  - There's an `index.html` page and `config.yml` configuration file in the
    `admin/` directory that allows authenticating with GitHub to edit the
    content and commit changes directly to the repository.
- [Cloudflare Pages](https://pages.cloudflare.com) is used for building the site
  in Eleventy and serving the website.
  - There's a 'Cloudflare Workers and Pages' app with permissions to this repo
    in the Cannabis Wire organization on GitHub, and it watches the `main`
    branch to know when to rebuild.
  - [Settings on CloudFlare](https://dash.cloudflare.com/08fdf24a5eb96ee62057c37a8a1635f2/pages/view/nushinrashidian-com/settings/production)
  - [Settings on GitHub](https://github.com/organizations/cannabiswire/settings/installations/54694297)
- [netlify-cms-cloudflare-pages](https://github.com/i40west/netlify-cms-cloudflare-pages)
  - This is a pair of JavaScript files that allows us to authenticate with
    GitHub via OAuth (neither Decap nor Cloudflare provide this otherwise).
  - [Cannabis Wire organization OAuth Apps Settings on GitHub](https://github.com/organizations/cannabiswire/settings/applications)
