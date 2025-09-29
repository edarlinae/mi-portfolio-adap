import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, ProjectTranslations } from '../../services/translation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// CAMBIO: Se elimina faFirebase de esta línea
import { faAngular, faCss3Alt, faGithub, faHtml5, faJs, faSass } from '@fortawesome/free-brands-svg-icons';
// CAMBIO: Se añade faDatabase a esta línea
import { faCode, faEye, faDatabase } from '@fortawesome/free-solid-svg-icons';

export interface Technology {
  name: string;
  icon?: IconDefinition;
  text?: string;
  color?: string;
  isCustom?: boolean;
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
        { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
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
        { name: 'TypeScript', isCustom: true },
        { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
        { name: 'API REST', text: 'API REST' }
      ],
      liveDemoUrl: 'https://weather-app-edarlinae.vercel.app/',
      githubUrl: 'https://github.com/edarlinae/Weather-App'
    },
    {
      imageUrl: 'assets/apego-consciente.png',
      translationKey: 'project3',
      technologies: [
        { name: 'Angular', icon: faAngular, color: '#dd0031' },
        { name: 'TypeScript', isCustom: true },
        { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
        // CAMBIO: Se usa faDatabase como sustituto de Firebase
        { name: 'Firebase', icon: faDatabase, color: '#FFCA28' }
      ],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/edarlinae/apego-consciente'
    },
    {
      imageUrl: 'assets/kairosgab.png',
      translationKey: 'project4',
      technologies: [
        { name: 'Angular', icon: faAngular, color: '#dd0031' },
        { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
        { name: 'SCSS', icon: faSass, color: '#cc6699' },
        { name: 'TypeScript', isCustom: true }
      ],
      liveDemoUrl: 'https://www.gabinetekairos.es/',
      githubUrl: 'https://github.com/edarlinae/kairos-web'
    }
  ]);

  getProjectTranslation(key: 'project1' | 'project2' | 'project3' | 'project4'): ProjectTranslations {
    return this.t()[key];
  }
}