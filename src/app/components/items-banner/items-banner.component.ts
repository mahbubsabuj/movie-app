import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: IMovie[] = [];
  @Input() categoryName: string = "";
  constructor() {}

  ngOnInit(): void {}
}
