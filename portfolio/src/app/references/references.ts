import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

type RefItem = {
  textKey: string;
  authorKey: string;
};

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.html',
  styleUrls: ['./references.scss'],
})
export class References {
 refs: RefItem[] = [
  { textKey: 'references.0.text', authorKey: 'references.0.author' },
  { textKey: 'references.1.text', authorKey: 'references.1.author' },
  { textKey: 'references.2.text', authorKey: 'references.2.author' },
  { textKey: 'references.3.text', authorKey: 'references.3.author' },
];

  currentIndex = 0;


  get leftIndex(): number {
    return (this.currentIndex - 1 + this.refs.length) % this.refs.length;
  }

  get rightIndex(): number {
    return (this.currentIndex + 1) % this.refs.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.refs.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.refs.length) % this.refs.length;
  }

  goTo(i: number): void {
    this.currentIndex = i;
  }

}