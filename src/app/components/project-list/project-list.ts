import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, ProjectTranslations } from '../../services/translation';

export interface Technology {
  name: string;
  iconUrl?: string;
}

type ProjectKeys = 'project1' | 'project2' | 'project3' | 'project4';

export interface Project {
  imageUrl: string;
  translationKey: ProjectKeys;
  githubUrl: string;
  liveDemoUrl?: string;
  technologies: Technology[];
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  protected readonly projects = signal<Project[]>([
    { // PRIMER PROYECTO: ApegoConsciente (project4)
      imageUrl: 'assets/apego-consciente.png',
      translationKey: 'project4',
      githubUrl: 'https://github.com/edarlinae/apego-consciente.git',
      liveDemoUrl: 'https://apego-consciente.vercel.app/home/',
      technologies: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
        { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
        { name: 'SCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' } // Vercel eliminado aquí
      ]
    },
    { // SEGUNDO PROYECTO: ClickToCall (project2)
      imageUrl: 'assets/clicktocall-preview.png',
      translationKey: 'project2',
      githubUrl: 'https://github.com/edarlinae/Prueba-CTCB.git',
      technologies: [
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
        { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
        { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
        { name: 'Chrome API' }
      ]
    },
    { // TERCER PROYECTO: Weather App (project3)
      imageUrl: 'assets/weather-app-preview.jpg',
      translationKey: 'project3',
      githubUrl: 'https://github.com/edarlinae/app-clima.git',
      technologies: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
        { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
        { name: 'SCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'API REST' }
      ]
    },
    { // CUARTO PROYECTO: Portfolio (project1)
      imageUrl: 'assets/portfolio-preview.png',
      translationKey: 'project1',
      githubUrl: 'https://github.com/edarlinae/mi-portfolio.git',
      liveDemoUrl: 'https://mi-portfolio-blush.vercel.app/',
      technologies: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
        { name: 'SCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' } // Vercel eliminado aquí
      ]
    }
  ]);

  getProjectTranslation(key: ProjectKeys): ProjectTranslations {
    return (this.t() as any)[key];
  }
}