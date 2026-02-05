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
      description: 'Join ist ein webbasiertes Task-Management-Tool, das sich am Kanban-Prinzip orientiert. Aufgaben lassen sich erstellen, organisieren und in verschiedene Arbeitsphasen verschieben.',
      imageUrl: 'assets/img/poject-pics/Join.jpg',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '02',
      title: 'Pokedex',
      stack: ['HTML', 'CSS', 'JavaScript', 'API'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg', 'assets/icons/api.svg'],
      description: 'In diesem Projekt habe ich eine interaktive Pokédex-Webanwendung umgesetzt. Nutzer können die Pokémon durchsuchen, filtern und Detailinformationen abrufen.',
      imageUrl: 'assets/img/poject-pics/pokedex.png',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '03',
      title: 'Instagram-Clon',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      description: 'In diesem Projekt habe ich das Instagram-Design detailgetreu im Frontend nachgebaut. Fokus lag auf der UI-Umsetzung, Interaktionen wie Likes und Kommentare werden lokal im Browser gespeichert.',
      imageUrl: 'assets/img/poject-pics/instagram-clon.png',
      githubUrl: 'https://github.com/...',
      liveUrl: 'https://...'
    },
    {
      nr: '04',
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      description: 'In diesem Projekt habe ich ein klassisches Jump-and-Run-Spiel mit JavaScript umgesetzt. Fokus lag auf Spiellogik, Kollisionen, Animationen und einem flüssigen Spielerlebnis im Browser.',
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
