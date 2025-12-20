import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './../shared/header/header';
import { Hero } from './../hero/hero';
import { AboutMe } from './../about-me/about-me';
import { Skills } from './../skills/skills';
import { Projects } from './../projects/projects';
import { References } from '../references/references';
import { Contact } from '../contact/contact';


@Component({
  selector: 'app-portfolio',
  imports:[ Header,CommonModule, RouterOutlet, Hero, AboutMe, Skills, Projects, References, Contact],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})


export class Portfolio {

}
