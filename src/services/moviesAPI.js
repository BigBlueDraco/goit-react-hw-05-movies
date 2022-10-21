import axios from 'axios';

export class moviesApi {
  static baseUrl = 'https://api.themoviedb.org/3';
  static trendingEndPoint = '/trending/movie/day';
  static searchEndPoint = '/search/movie';
  static async searchMovies(query = 'Batman') {
    const { data } = await axios.get(`${this.baseUrl}${this.searchEndPoint}`, {
      params: {
        api_key: 'fd0a7baec7e1722e7549dfbeea65227f',
        query,
      },
    });
    return data;
  }
  static async fetchTrendingMoviesToday() {
    const { data } = await axios.get(
      `${this.baseUrl}${this.trendingEndPoint}`,
      {
        params: {
          api_key: 'fd0a7baec7e1722e7549dfbeea65227f',
        },
      }
    );
    return data;
  }
}
