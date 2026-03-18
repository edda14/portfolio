import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// Custom loader for ngx-translate to load translation files from assets
export class JsonTranslateLoader implements TranslateLoader {

  constructor(private http: HttpClient) {}

  // Loads the translation file based on the selected language
  getTranslation(lang: string): Observable<any> {
    return this.http.get(`assets/i18n/${lang}.json`);
  }
}