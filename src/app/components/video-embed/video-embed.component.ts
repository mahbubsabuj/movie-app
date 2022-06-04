import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent implements OnInit{
  videoUrl: SafeResourceUrl | null = null;
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;
  constructor(private senitizer: DomSanitizer) {}
  ngOnInit(): void {
    if (this.key) {
      if (this.site === "YouTube") {
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
      } else {
        this.videoUrl = this.getSafeUrl('https://player.vimeo.com/video/' + this.key);
      }
    }
  }
  getSafeUrl(url: string) {
    return this.senitizer.bypassSecurityTrustResourceUrl(url);
  }
}
