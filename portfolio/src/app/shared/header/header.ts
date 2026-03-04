import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, NgIf],
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

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}