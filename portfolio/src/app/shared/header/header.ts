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

  setLang(l: 'de' | 'en') {
    this.lang.setLang(l);
  }

  isActive(l: 'de' | 'en') {
    return this.lang.getCurrentLang() === l;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('no-scroll', this.menuOpen);
    }
  }

  closeMenu() {
    this.menuOpen = false;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }
}
// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';
// import { LanguageService } from '../../language.service';
// import { NgIf } from '@angular/common';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterLink, TranslateModule, NgIf],
//   templateUrl: './header.html',
//   styleUrl: './header.scss',
// })

// export class Header {
//   constructor(public lang: LanguageService) {}

//   setLang(l: 'de' | 'en') {
//     this.lang.setLang(l);
//   }

//   isActive(l: 'de' | 'en') {
//     return this.lang.getCurrentLang() === l;
//   }

//   menuOpen = false;

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//     document.body.classList.toggle('no-scroll', this.menuOpen);
//   }

//   closeMenu() {
//     this.menuOpen = false;
//     document.body.classList.remove('no-scroll');
//   }
// }