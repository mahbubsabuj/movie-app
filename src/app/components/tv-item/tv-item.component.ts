import { Component, Input, OnInit } from '@angular/core';
import { ITvShow } from 'src/app/models/tv.model';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss'],
})
export class TvItemComponent implements OnInit {
  @Input() item: ITvShow | null = null;
  constructor() {}

  ngOnInit(): void {}
}
