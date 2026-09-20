import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  selector: 'app-site-footer',
  styleUrl: './site-footer.css',
  templateUrl: './site-footer.html',
})
export class SiteFooter {}
