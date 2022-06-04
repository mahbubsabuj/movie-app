import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private movieService: MovieService) {}
  movie: IMovie | null = null;
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe({
      next: ({id}) => {
        this.movieService.getMovie(id).subscribe({
          next: (response: IMovie) => {
            this.movie = response;
            console.log(this.movie);
          },
          error: (error) => {
            console.log(error);
          }
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  ngOnDestroy(): void {
    console.log("MovieDetailDestroyed")
  }
}
