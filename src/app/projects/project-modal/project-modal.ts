import { Component, EventEmitter, Input, Output, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
  animations: [
    trigger('contentFade', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('250ms ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectModal {
  @Input({ required: true }) project!: any;

  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  touchEndY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Closes the modal only when the user clicks on the backdrop itself
  onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) this.closeModal();
  }

  ngOnInit() {
    // Prevents background scrolling while the modal is open
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    }
  }

  closeModal() {
    // Re-enables page scrolling when the modal is closed
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
    this.close.emit();
  }

  ngOnDestroy() {
    // Cleanup in case the modal is destroyed without calling closeModal()
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  trackByNr = (_: number, p: any) => p?.nr;
  trackByImg = (_: number, url: string) => url;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    this.handleSwipe();
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const threshold = 60;

    // Only horizontal swipes above the threshold trigger navigation
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        this.next.emit();
      } else {
        this.prev.emit();
      }
    }
  }
}