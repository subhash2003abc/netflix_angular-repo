import { Component, inject,OnInit } from '@angular/core';
import { MovieService } from './shared/services/movie.service';
import { IVideoContent } from './shared/models/video-interference';
import { forkJoin, Observable,switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movieService=inject(MovieService);

  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();
   
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
   ratedMovies: IVideoContent[] = [];
   nowPlayingMovies: IVideoContent[] = [];
   topRatedMovies: IVideoContent[] = [];
   upcomingMovies: IVideoContent[] = [];
 

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getTopRated()
  ];
  
 

  

  ngOnInit(): void {
    forkJoin(this.sources)
    .pipe(
      map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, topRated]) => {
        this.bannerDetail$ = this.movieService.getBannerDetail(movies.results[0].id);
        this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[0].id);
        return {movies, tvShows, ratedMovies, nowPlaying, upcoming, topRated };
      })
    ).subscribe((res:any)=>{
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
      this.ratedMovies = res.ratedMovies.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.upcomingMovies = res.upcoming.results as IVideoContent[];
      this.topRatedMovies = res.topRated.results as IVideoContent[];
  
        this.getMovieKey();
      
    })
  }
  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id)
    .subscribe(res=>{
      console.log(res);
      
    })
  }

 

}


//  movies:IVideoContent[]=[];
  //  tvShows:IVideoContent[]=[];
  
  // ngOnInit(): void {
  //    this.movieService.getMovies().subscribe(res=>{
  //     console.log(res)
  //     this.movies=res.results
  //   })

  //   this.movieService.getTvShows().subscribe(res=>{
  //     console.log(res)
  //     this.tvShows=res.results
  //    })
  //    this.movieService.getRatedMovies().subscribe(res=>{
  //     console.log(res)
  //     this.ratedMovies=res.results
  //    })
     
  //    this.movieService.getNowPlayingMovies().subscribe(res=>{
  //     console.log(res)
  //     this.nowPlayingMovies=res.results
  //    })
  //    this.movieService.getUpcomingMovies().subscribe(res=>{
  //     console.log(res)
  //     this.upcomingMovies=res.results
  //    })
  //    this.movieService.getTopRated().subscribe(res=>{
  //     console.log(res)
  //   })  
  // }