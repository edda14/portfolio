import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  private readonly KEY = 'lang';

  init() {
    const lang = this.getStoredLang() ?? 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(lang);
  }

  setLang(lang: 'de' | 'en') {
    this.translate.use(lang);
    this.storeLang(lang);
  }

  getCurrentLang(): 'de' | 'en' {
    return (this.translate.currentLang as 'de' | 'en') || 'de';
  }

  private getStoredLang(): 'de' | 'en' | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return (localStorage.getItem(this.KEY) as 'de' | 'en' | null);
  }

  private storeLang(lang: 'de' | 'en') {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(this.KEY, lang);
  }
}