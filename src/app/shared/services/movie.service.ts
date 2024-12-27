import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';



const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmNmZmVlYzA2Yzc4YWEwODRmZDcxMTEyN2E1ODM1OSIsInN1YiI6IjY2NDgyNTNmNWRlOTkyYjM5MDk1YWQ2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2kBkxzGQZsuld7XQ6tsyC5FGvyW_1fvzqaCnjOMcVU'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' , options)
  }


  getTvshows(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }
   

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }


  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }


  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }


  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  }

}
