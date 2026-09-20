import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

interface Plan {
  readonly key: string;
  readonly featureIndexes: readonly number[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  selector: 'app-pricing-section',
  styleUrl: './pricing-section.css',
  templateUrl: './pricing-section.html',
})
export class PricingSection {
  readonly plans: readonly Plan[] = [
    {key: 'basic', featureIndexes: [0, 1, 2]},
    {key: 'professional', featureIndexes: [0, 1, 2, 3]},
    {key: 'enterprise', featureIndexes: [0, 1, 2]},
  ];
}
