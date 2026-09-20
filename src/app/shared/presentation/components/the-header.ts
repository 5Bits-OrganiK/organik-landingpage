import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcher} from './language-switcher';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe, LanguageSwitcher],
  selector: 'app-the-header',
  styleUrl: './the-header.css',
  templateUrl: './the-header.html',
})
export class TheHeader {
  readonly isOpen = signal(false);
  readonly navItems = [
    {href: '#product-information', label: 'nav.product'},
    {href: '#videos', label: 'nav.videos'},
    {href: '#pricing', label: 'nav.pricing'},
    {href: '#starter', label: 'nav.starter'},
  ];

  closeMenu(): void {
    this.isOpen.set(false);
  }

  toggleMenu(): void {
    this.isOpen.update((value) => !value);
  }
}
