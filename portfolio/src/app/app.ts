import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './language.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Footer,],
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
