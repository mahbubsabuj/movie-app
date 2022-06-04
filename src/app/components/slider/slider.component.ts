import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: IMovie[] = [];
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        ++this.currentSlideIndex;
        if (this.currentSlideIndex == this.items.length) {
          this.currentSlideIndex = 0;
        }
      }, 5000);
    }
  }
}
