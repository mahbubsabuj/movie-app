import { Component, OnInit } from '@angular/core';
import { IMovie, IMovieRoot } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nowPlayingMovies: IMovie[] = [];
  upcomingMovies: IMovie[] = [];
  popularMovies: IMovie[] = [];
  topRatedMovies: IMovie[] = [];
  constructor(private movieService: MovieService) {}
  getMovies(type: string): void {
    this.movieService.getMovies(type).subscribe({
      next: (response: IMovieRoot) => {
        if (type === 'upcoming') {
          this.upcomingMovies = response.results;
          console.log(this.upcomingMovies);
        } else if (type === 'top_rated') {
          this.topRatedMovies = response.results;
        } else if (type === 'popular') {
          this.popularMovies = response.results;
        } else {
          this.nowPlayingMovies = response.results;
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  ngOnInit(): void {
    this.getMovies('upcoming');
    this.getMovies('now_playing');
    this.getMovies('popular');
    this.getMovies('top_rated');
  }
}
