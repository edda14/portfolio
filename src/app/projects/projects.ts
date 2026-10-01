import { Component } from '@angular/core';
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
  showDaBubble = false;
  showPoll = false;
  showElPollo = false;

  // List of portfolio projects displayed in the projects section
  projects: Project[] = [
    {
      nr: '01',
      title: 'Join',
      stack: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'n8n'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg','assets/icons/firebase.svg', 'assets/icons/n8n-color.svg'],
      descriptionKey: 'projectDescriptions.join',
      imageUrl: 'assets/img/poject-pics/Join.png',
      githubUrl: 'https://github.com/edda14/Join',
      liveUrl: 'https://join-liard.vercel.app/'
    },
    {
      nr: '02',
      title: 'DaBubble',
      stack: ['HTML', 'SCSS', 'Angular', 'Firebase'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/scss-svgrepo-com.svg', 'assets/icons/angular.svg', 'assets/icons/firebase.svg'],
      descriptionKey: 'projectDescriptions.daBubble',
      imageUrl: 'assets/img/poject-pics/Dabubble.png',
      githubUrl: 'https://github.com/edda14/DABubble',
      liveUrl: 'https://da-bubble-zc3q-r533gtanh-julsino-s-projects.vercel.app/login'
    },
    {
      nr: '03',
      title: 'Poll-App',
      stack: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/typescript.svg', 'assets/icons/angular.svg', ],
      descriptionKey: 'projectDescriptions.instagram',
      imageUrl: 'assets/img/poject-pics/poll-app.png',
      githubUrl: 'https://github.com/edda14/poll-app',
      liveUrl: 'https://poll-app-seven-omega.vercel.app/'
    },
    {
      nr: '04',
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      stackIMG: ['assets/icons/html.svg', 'assets/icons/css-3.svg', 'assets/icons/java-script.svg'],
      descriptionKey: 'projectDescriptions.pollo',
      imageUrl: 'assets/img/poject-pics/el-pollo-loco.png',
      githubUrl: 'https://github.com/edda14/elpollo',
      liveUrl: 'https://elpollo.vercel.app'
    }
  ];

  selectedIndex: number | null = null;

  // Opens the selected project inside the modal
  openProject(i: number) {
    this.selectedIndex = i;
    document.body.style.overflow = 'hidden';
  }

  // Closes the modal and restores page scrolling
  closeModal() {
    this.selectedIndex = null;
    document.body.style.overflow = '';
  }

  // Shows the next project in the modal
  nextProject() {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
  }

  // Shows the previous project in the modal
  prevProject() {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex - 1 + this.projects.length) % this.projects.length;
  }
}