import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Project = {
  nr: string;
  title: string;
  stack: string[];
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModal {
 @Input({ required: true }) project!: Project;

  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) this.close.emit();
  }
}
