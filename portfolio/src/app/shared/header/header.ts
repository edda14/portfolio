import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public lang: LanguageService) {}

  setLang(l: 'de' | 'en') {
    this.lang.setLang(l);
  }

  isActive(l: 'de' | 'en') {
    return this.lang.getCurrentLang() === l;
  }
}