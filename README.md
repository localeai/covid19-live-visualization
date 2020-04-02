# COVID19 Visualization
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
> Please note. The data used in the visualization is from an [opensource project](https://github.com/ExpDev07/coronavirus-tracker-api). We don't guarantee accurate numbers, but we are trying our best to find a reliable source of data.

![](https://github.com/localeai/covid19-live-visualization/raw/master/public/meta.png)
## Project setup
```bash
# Clone the project
git clone https://github.com/localeai/covid19-live-visualization.git

# Install dependencies
npm install

# start development server
npm run serve

# generate production build
npm run build
```

## Environment variables
Copy the `.env.example` file to `.env` and specify the mentioned variables.
```bash
cp .env.example .env
```
### variables
- `VUE_APP_MAPBOX_TOKEN` : [Mapbox](https://mapbox.com) API token. You can get one for yourself from [here](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)
- `VUE_APP_COVID_API_URL` : API which gives the layers data to the webapp. Currently the layers are picked up from periodically generated file from [GitHub Repo](https://github.com/covid19-layers-api). Use the static data URL as the API URL.
```bash
VUE_APP_COVID_API_URL=https://raw.githubusercontent.com/haxzie/covid19-layers-api/master/data/layers
```
- `VUE_APP_API_REPO_URL` : The GitHub api url for the repo which holds the layers data. Used to pickup the last updated date from the latest commit to the repo. You can use the github api, along with the static repo URL
```bash
VUE_APP_API_REPO_URL=https://api.github.com/repos/haxzie/covid19-layers-api
```
## Libraries Used
- [Vue.js](https://github.com/vuejs/vue)
- [Deck.gl](https://github.com/uber/deck.gl)
- [MapboxGL.js](https://github.com/mapbox/mapbox-gl-js)
- [chroma.js](https://github.com/gka/chroma.js)

## APIs Used (Thanks for the creators :heart: )
- [Covid19 Layers API](https://github.com/haxzie/covid19-layers-api) by [haxzie](https://github.com/haxzie)
- [corona-virus-tracker-api](https://github.com/ExpDev07/coronavirus-tracker-api) by [ExpDev07](https://github.com/ExpDev07)

## DataSources
- [CSSEGISandData JhonHopkins](https://github.com/CSSEGISandData/COVID-19)
- [Ministry of Health and Welfare India](https://mohfw.gov.in)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://haxzie.com"><img src="https://avatars1.githubusercontent.com/u/53584487?v=4" width="100px;" alt=""/><br /><sub><b>Musthaq Ahamad</b></sub></a><br /><a href="#design-haxzie" title="Design">🎨</a> <a href="https://github.com/localeai/covid19-live-visualization/commits?author=haxzie" title="Code">💻</a></td>
    <td align="center"><a href="https://rumaan.me"><img src="https://avatars1.githubusercontent.com/u/18492868?v=4" width="100px;" alt=""/><br /><sub><b>Rumaan Khalander</b></sub></a><br /><a href="https://github.com/localeai/covid19-live-visualization/commits?author=rumaan" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
