import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';
import {TranslatePipe} from '@ngx-translate/core';

interface LandingVideo {
  readonly key: string;
  readonly source: SafeResourceUrl;
  readonly preview: SafeHtml;
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
        preview: this.buildPreview('2vlASNiEDNk', 'Conoce a las personas detras de OrganiK'),
      },
      {
        key: 'product',
        source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Gu3jqJepwaI'),
        preview: this.buildPreview('Gu3jqJepwaI', 'Asi funciona OrganiK'),
      },
    ];
  }

  private buildPreview(videoId: string, title: string): SafeHtml {
    const previewHtml = `
      <style>
        * { box-sizing: border-box; }
        body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #00336f; }
        a { position: absolute; inset: 0; display: grid; place-items: center; text-decoration: none; }
        img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        span {
          position: relative;
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ff5b16;
          box-shadow: 0 18px 36px rgba(8, 38, 83, .24);
        }
        span::before {
          content: "";
          margin-left: 5px;
          border-block: 14px solid transparent;
          border-left: 22px solid #fff;
        }
      </style>
      <a href="https://www.youtube.com/embed/${videoId}?autoplay=1" aria-label="${title}">
        <img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="${title}" />
        <span aria-hidden="true"></span>
      </a>`;

    return this.sanitizer.bypassSecurityTrustHtml(previewHtml);
  }
}
