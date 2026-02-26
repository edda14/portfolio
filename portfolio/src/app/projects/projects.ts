import { Component, HostListener } from '@angular/core';
import { ProjectModal } from './../../app/projects/project-modal/project-modal';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

type Project = {
  nr: string;
  title: string;
  stack: string[];
  stackIMG: string[];
  descriptionKey: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

@Component({
  selector: 'app-projects',
  imports: [ProjectModal, CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  showJoin = false;
  showPokedex = false;
  showInstagram = false;
  showElPollo = false;

  projects: Project[] = [
    {
      nr: '01',
      title: 'Join',
      stack: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/typescript.svg', 'assets/icons/angular.svg', 'assets/icons/firebase.svg'],
      descriptionKey: 'projectDescriptions.join',
      imageUrl: 'assets/img/poject-pics/Join.jpg',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '02',
      title: 'Pokedex',
      stack: ['HTML', 'CSS', 'JavaScript', 'API'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg', 'assets/icons/api.svg'],
      descriptionKey: 'projectDescriptions.pokedex',
      imageUrl: 'assets/img/poject-pics/pokedex.png',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '03',
      title: 'Instagram-Clon',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      descriptionKey: 'projectDescriptions.instagram',
      imageUrl: 'assets/img/poject-pics/instagram-clon.png',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '04',
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      descriptionKey: 'projectDescriptions.pollo',
      imageUrl: 'assets/img/poject-pics/el-pollo-loco.jpg',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    }
  ];

  selectedIndex: number | null = null;

  openProject(i: number) { this.selectedIndex = i; document.body.style.overflow = 'hidden'; }
  closeModal() { this.selectedIndex = null; document.body.style.overflow = ''; }

  nextProject() {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
  }
  prevProject() {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex - 1 + this.projects.length) % this.projects.length;
  }
}
