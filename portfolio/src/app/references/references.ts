import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type RefItem = { text: string; author: string };

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrls: ['./references.scss'],
})
export class References {
  refs: RefItem[] = [
    { text: 'Juls is blablablabla', author: 'E. Ertuk – Project Partner' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione eum sint praesentium.', author: 'P. Weiss – Project Partner' },
    { text: 'adipisicing elit. Quidem ratione eum sint praesentium.', author: 'K. Ekhart – Mentor' },
    { text: 'Lorem ipsum dolor sit amet consectetur', author: 'F. Szceric – Partner' },
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