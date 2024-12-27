import { Component, Inject, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarousalComponent } from '../../shared/component/movie-carousal/movie-carousal.component';
import { CommonModule } from '@angular/common';
import { IvideoContent } from '../../shared/models/video-content';
import { Observable, forkJoin, map } from 'rxjs';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [  CommonModule,HeaderComponent , BannerComponent , MovieCarousalComponent ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{


  

  // private loggedInuser = sessionStorage.getItem('loggedInUser')

  auth = inject(AuthService)

  movieService = inject(MovieService)

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name
  profileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email
  bannerDetails = new Observable<any>();
  bannerVideo!:  string

  movies : IvideoContent[] = []
  tvshows : IvideoContent[]=[]
  ratedmovies : IvideoContent[] =[]
  nowPlaying: IvideoContent[] =[]
  popularMovies:IvideoContent[]=[]
  upcomingmovies : IvideoContent[] = []

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvshows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getTopRated()
  ]



  ngOnInit(): void {
    forkJoin(this.sources)
    .pipe(
      map(([movies , tvshows , ratedmovies , nowplaying, popularmovies , upcomingmovies])=>{

        this.bannerDetails = this.movieService.getBannerDetail(movies.results[0].id)
        this.movieService.getBannerVideo(popularmovies.results[0].id).subscribe((resp:any)=>{
          this.bannerVideo=resp?.results[0].id
        })

        return {movies , tvshows , ratedmovies , nowplaying, popularmovies , upcomingmovies}
      })
    ).subscribe((res:any)=>{
      this.movies=res.movies.results as IvideoContent[]
      this.tvshows=res.tvshows.results as IvideoContent[]
      this.ratedmovies=res.ratedmovies.results as IvideoContent[]
      // this.nowPlaying=res.nowPlaying.results as IvideoContent[]
      // this.popularMovies=res.popularMovies.results as IvideoContent[]
      // this.upcomingmovies=res.upcomingmovies.results as IvideoContent[]
    })
  }

  signOut() : void{

    //clearing the key from session storage
    sessionStorage.removeItem('loggedInUser')
    this.auth.signOut()
  }
}
