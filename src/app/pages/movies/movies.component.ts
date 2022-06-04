import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  constructor(private movieService: MovieService) {}
  getPagedMovies(page: number) {
    this.movieService.searchMovies(page).subscribe({
      next: (movie: IMovie[]) => {
        this.movies = movie;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  paginate(page: number) {
    this.getPagedMovies(page + 1);
  }
  ngOnInit(): void {
    this.getPagedMovies(1);
  }
}
