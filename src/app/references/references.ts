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

  // List of reference entries using translation keys
  refs: RefItem[] = [
    { textKey: 'references.0.text', authorKey: 'references.0.author' },
    { textKey: 'references.1.text', authorKey: 'references.1.author' },
    { textKey: 'references.2.text', authorKey: 'references.2.author' },
    { textKey: 'references.3.text', authorKey: 'references.3.author' },
  ];

  currentIndex = 0;

  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  touchEndY = 0;

  // Index of the item displayed on the left side
  get leftIndex(): number {
    return (this.currentIndex - 1 + this.refs.length) % this.refs.length;
  }

  // Index of the item displayed on the right side
  get rightIndex(): number {
    return (this.currentIndex + 1) % this.refs.length;
  }

  // Navigate to next reference
  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.refs.length;
  }

  // Navigate to previous reference
  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.refs.length) % this.refs.length;
  }

  // Jump directly to a specific reference
  goTo(i: number): void {
    this.currentIndex = i;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    this.handleSwipe();
  }

  // Detects horizontal swipe gestures for navigation
  handleSwipe(): void {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const threshold = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
}