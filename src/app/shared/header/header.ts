import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = false;

  constructor(
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Switches the current language
  setLang(l: 'de' | 'en') {
    this.lang.setLang(l);
  }

  // Checks if a language is currently active (used for UI highlighting)
  isActive(l: 'de' | 'en') {
    return this.lang.getCurrentLang() === l;
  }

  // Toggles the mobile menu and locks body scroll when open
  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('no-scroll', this.menuOpen);
    }
  }

  // Closes the menu and restores scrolling
  closeMenu() {
    this.menuOpen = false;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }
}