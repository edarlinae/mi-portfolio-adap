import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, ProjectTranslations } from '../../services/translation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faBootstrap, faCss3Alt, faFigma, faGithub, faHtml5, faJs, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

export interface Technology {
  name: string;
  icon: IconDefinition;
  color: string; // <-- AÑADIR PROPIEDAD DE COLOR
}

export interface Project {
  imageUrl: string;
  translationKey: 'project1' | 'project2' | 'project3' | 'project4';
  technologies: Technology[];
  liveDemoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectListComponent {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  faGithub = faGithub;
  faEye = faEye;

  protected readonly projects = signal<Project[]>([
    {
      imageUrl: 'assets/clicktocall-preview.png',
      translationKey: 'project1',
      technologies: [
        { name: 'JavaScript', icon: faJs, color: '#f7df1e' },
        { name: 'HTML', icon: faHtml5, color: '#e34f26' },
        { name: 'CSS', icon: faCss3Alt, color: '#1572b6' },
        { name: 'Chrome API', icon: faCode, color: '#888' }
      ],
      liveDemoUrl: 'https://chromewebstore.google.com/detail/clicktocall-premium-number/hcdjknjpbnhdmpdkeofgmafdcepdbjfg?hl=es',
      githubUrl: 'https://github.com/edarlinae/ClickToCall'
    },
    {
      imageUrl: 'assets/weather-app-preview.jpg',
      translationKey: 'project2',
      technologies: [
        { name: 'Angular', icon: faAngular, color: '#dd0031' },
        { name: 'TypeScript', icon: faCode, color: '#3178c6' },
        { name: 'Bootstrap', icon: faBootstrap, color: '#7952b3' }
      ],
      liveDemoUrl: 'https://weather-app-edarlinae.vercel.app/',
      githubUrl: 'https://github.com/edarlinae/Weather-App'
    },
    {
      imageUrl: 'assets/apego-consciente.png',
      translationKey: 'project3',
      technologies: [
        { name: 'Angular', icon: faAngular, color: '#dd0031' },
        { name: 'TypeScript', icon: faCode, color: '#3178c6' },
        { name: 'SCSS', icon: faSass, color: '#cc6699' },
        { name: 'Figma', icon: faFigma, color: '#f24e1e' }
      ],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/edarlinae/apego-consciente'
    },
    {
      imageUrl: 'assets/kairosgab.png',
      translationKey: 'project4',
      technologies: [
        { name: 'Angular', icon: faAngular, color: '#dd0031' },
        { name: 'TypeScript', icon: faCode, color: '#3178c6' },
        { name: 'SCSS', icon: faSass, color: '#cc6699' }
      ],
      liveDemoUrl: 'https://www.gabinetekairos.es/',
      githubUrl: 'https://github.com/edarlinae/kairos-web'
    }
  ]);

  getProjectTranslation(key: 'project1' | 'project2' | 'project3' | 'project4'): ProjectTranslations {
    return this.t()[key];
  }
}