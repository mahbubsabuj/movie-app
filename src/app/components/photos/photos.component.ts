import { Component, Input, OnInit } from '@angular/core';
import { IMovieImages } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  images: IMovieImages[] = [];
  @Input() id: number | null = null;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.id) {
      this.movieService.getMoviePhotos(this.id).subscribe({
        next: (response: IMovieImages[]) => {
          this.images = response;
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
    
  }
}
