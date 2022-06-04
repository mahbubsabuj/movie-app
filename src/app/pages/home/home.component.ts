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
  getMovies(type: string, count: number): void {
    this.movieService.getMovies(type, count).subscribe({
      next: (response: IMovie[]) => {
        if (type === 'upcoming') {
          this.upcomingMovies = response;
        } else if (type === 'top_rated') {
          this.topRatedMovies = response;
        } else if (type === 'popular') {
          this.popularMovies = response;
        } else {
          this.nowPlayingMovies = response;
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  ngOnInit(): void {
    this.getMovies('upcoming', 12);
    this.getMovies('now_playing', 12);
    this.getMovies('popular', 12);
    this.getMovies('top_rated', 12);
  }
}
