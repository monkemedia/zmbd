import axios from 'axios'

const VERSION = '3'
const KEY = '316ccc57b7b0c7ac0c649a6b33b38ea0'
const BASE_URL = `https://api.themoviedb.org/${VERSION}`
const API_KEY = {
  params: {
    api_key: KEY
  }
}

export default {
  errorHandler (err) {
    console.log('Error: ', err)
  }, 

  async fetchData (url, params) {
    let response

    try {
      response = await axios.get(url, params)
      return response.data
    } catch (err) {
      this.errorHandler(err)
    }
  },

  moviesNowPlaying () {
    return this.fetchData(`${BASE_URL}/movie/now_playing`, API_KEY)
  },

  genreList () {
    return this.fetchData(`${BASE_URL}/genre/movie/list`, API_KEY)
  }
}
