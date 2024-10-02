import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
    Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmJjZGEyNGQ1ZTg0NGNhMmFlODllMGRhNjBlNzk2ZiIsIm5iZiI6MTcyNzU1NDQ5MC44OTI0NjIsInN1YiI6IjY2Zjg1M2FmYTYyOTNlM2Q3NmEyMWY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VMn-xINUcnyVsQ0t1q9IQ1Hjcoqj5njVsWM76rAd4Cs'
}
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

 http=inject(HttpClient);
 getMovies() {
  return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
}

 getTvShows() {
   return this.http.get<any>('https://api.themoviedb.org/3/discover/tv', options)
 }

getRatedMovies() {
   return this.http.get<any>( 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
 }

 getBannerImage(id: number) {
   return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
}

 getBannerVideo(id: number) {
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
 }

getBannerDetail(id: number) {
  return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
}

getNowPlayingMovies() {
  return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
}



getTopRated() {
  return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated', options)
}

getUpcomingMovies() {
  return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming', options)
}
}
