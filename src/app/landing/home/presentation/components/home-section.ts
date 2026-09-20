import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  selector: 'app-home-section',
  styleUrl: './home-section.css',
  templateUrl: './home-section.html',
})
export class HomeSection {}
