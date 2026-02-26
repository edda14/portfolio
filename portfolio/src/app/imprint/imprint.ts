import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  imports: [Header, TranslateModule],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
