import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: IMovie | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
