import { Component, HostListener } from '@angular/core';
import { ProjectModal } from './../../app/projects/project-modal/project-modal';
import { CommonModule } from '@angular/common';

type Project = {
  nr: string;
  title: string;
  stack: string[];
  stackIMG: string[];
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

@Component({
  selector: 'app-projects',
  imports: [ProjectModal, CommonModule],
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
      description: 'Task manager inspired by the Kanban system...',
      imageUrl: 'assets/img/poject-pics/Join.jpg',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '02',
      title: 'Pokedex',
      stack: ['HTML', 'CSS', 'JavaScript', 'API'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg', 'assets/icons/api.svg'],
      description: 'Jump-and-run game with coins, enemies...',
      imageUrl: 'assets/img/poject-pics/pokedex.png'
    },
    {
      nr: '03',
      title: 'Instagram-Clon',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      description: 'Chat app with channels and threads...',
      imageUrl: 'assets/img/poject-pics/instagram-clon.png'
    },
    {
      nr: '04',
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      description: 'Chat app with channels and threads...',
      imageUrl: 'assets/img/poject-pics/el-pollo-loco.jpg'
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
