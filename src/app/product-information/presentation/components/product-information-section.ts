import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  selector: 'app-product-information-section',
  styleUrl: './product-information-section.css',
  templateUrl: './product-information-section.html',
})
export class ProductInformationSection {
  readonly cards = ['inventory', 'lots', 'orders', 'roles'];
}
