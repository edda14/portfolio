import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  // Key used to store the selected language in localStorage
  private readonly KEY = 'lang';

  // Initializes the language on app start
  init() {
    const lang = this.getStoredLang() ?? 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(lang);
  }

  // Changes the current language and stores it
  setLang(lang: 'de' | 'en') {
    this.translate.use(lang);
    this.storeLang(lang);
  }

  // Returns the currently active language
  getCurrentLang(): 'de' | 'en' {
    return (this.translate.currentLang as 'de' | 'en') || 'de';
  }

  // Reads the stored language from localStorage (browser only)
  private getStoredLang(): 'de' | 'en' | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem(this.KEY) as 'de' | 'en' | null;
  }

  // Saves the selected language in localStorage (browser only)
  private storeLang(lang: 'de' | 'en') {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(this.KEY, lang);
  }
}