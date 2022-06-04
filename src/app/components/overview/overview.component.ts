import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() item: IMovie | null = null;
  constructor() {}

  ngOnInit(): void {}
}
