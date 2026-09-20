import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslateService} from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonToggleGroup, MatButtonToggle],
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  readonly languages = ['es', 'en'];

  constructor(private readonly translate: TranslateService) {}

  get currentLang(): string {
    return this.translate.getCurrentLang() ?? 'es';
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
