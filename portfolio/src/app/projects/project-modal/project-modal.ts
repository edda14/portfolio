import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) this.close.emit();
  }

  trackByNr = (_: number, p: any) => p?.nr;
  trackByImg = (_: number, url: string) => url;
}