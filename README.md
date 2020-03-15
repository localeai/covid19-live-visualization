# COVID19 Visualization
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
- [corona-virus-tracker-api](https://github.com/ExpDev07/coronavirus-tracker-api) by [ExpDev07](https://github.com/ExpDev07)
- [Data for Indian states](https://exec.clay.run/kunksed/mohfw-covid) by [Raj Kunkolienkar](https://twitter.com/kunksed)
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
