import { Component, Input, OnInit } from '@angular/core';
import { IVideoItems } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videos: IVideoItems[] = [];
  @Input() id: number | null = null;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.id) {
      this.movieService.getMovieVideos(this.id).subscribe({
        next: (response: IVideoItems[]) => {
          this.videos = response;
          console.log(this.videos)
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
