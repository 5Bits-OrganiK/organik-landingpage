import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HomeSection} from './home/presentation/components/home-section';
import {PricingSection} from './pricing/presentation/components/pricing-section';
import {ProductInformationSection} from './product-information/presentation/components/product-information-section';
import {StarterSection} from './starter/presentation/components/starter-section';
import {VideoSection} from './videos/presentation/components/video-section';
import {SiteFooter} from './shared/presentation/components/site-footer';
import {TheHeader} from './shared/presentation/components/the-header';

@Component({
  imports: [
    TheHeader,
    HomeSection,
    ProductInformationSection,
    VideoSection,
    PricingSection,
    StarterSection,
    SiteFooter,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor(private readonly translate: TranslateService) {
    this.translate.use('es');
  }
}
