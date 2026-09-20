import {TestBed} from '@angular/core/testing';
import {provideTranslateService} from '@ngx-translate/core';
import {App} from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideTranslateService({
          fallbackLang: 'es',
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the landing sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-the-header')).toBeTruthy();
    expect(compiled.querySelector('#home')).toBeTruthy();
    expect(compiled.querySelector('#product-information')).toBeTruthy();
    expect(compiled.querySelector('#videos')).toBeTruthy();
    expect(compiled.querySelector('#pricing')).toBeTruthy();
    expect(compiled.querySelector('#starter')).toBeTruthy();
  });
});
