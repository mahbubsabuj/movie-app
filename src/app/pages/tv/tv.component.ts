import { Component, OnInit } from '@angular/core';
import { ITvShow } from 'src/app/models/tv.model';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvShows: ITvShow[] = [];
  constructor(private tvService: TvService) { }

  ngOnInit(): void {
    this.tvService.getTvShows().subscribe({
      next: (response: ITvShow[]) => {
        console.log(response);
        this.tvShows = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
