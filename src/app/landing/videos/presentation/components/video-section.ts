import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TranslatePipe} from '@ngx-translate/core';

interface LandingVideo {
  readonly key: string;
  readonly source: SafeResourceUrl;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  selector: 'app-video-section',
  styleUrl: './video-section.css',
  templateUrl: './video-section.html',
})
export class VideoSection {
  readonly videos: LandingVideo[];

  constructor(private readonly sanitizer: DomSanitizer) {
    this.videos = [
      {
        key: 'team',
        source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2vlASNiEDNk'),
      },
      {
        key: 'product',
        source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Gu3jqJepwaI'),
      },
    ];
  }
}
