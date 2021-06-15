import config from './config'

const API_KEY = config.apiKey
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=argentina&api_key=${API_KEY}&format=json`

export default function getArtists () {
    return fetch(URL)
            .then(response => response.json())
            .then(json => json.topartists.artist )
}

