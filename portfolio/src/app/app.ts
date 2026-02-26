import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Portfolio } from './portfolio/portfolio';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './language.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Footer, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');

  constructor(private lang: LanguageService) {}

   ngOnInit(): void {
    this.lang.init();
  }
}
