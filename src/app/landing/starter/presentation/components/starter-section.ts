import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, TranslatePipe],
  selector: 'app-starter-section',
  styleUrl: './starter-section.css',
  templateUrl: './starter-section.html',
})
export class StarterSection {}
