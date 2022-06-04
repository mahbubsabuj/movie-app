import { Component, Input, OnInit } from '@angular/core';
import { IMovie, IMovieCastCrew } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  cast: IMovieCastCrew[] = [];
  @Input() item: IMovie | null = null;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.item) {
      this.movieService.getMovieCredits(this.item.id).subscribe({
        next: (response: IMovieCastCrew[]) => {
          this.cast = response;
          console.log("Overview", this.cast)
        },
        error: (error) => {
          console.log(error);
        },
      })
    }
  }
}
