import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, ProjectTranslations } from '../../services/translation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faBootstrap, faCss3Alt, faFigma, faGithub, faHtml5, faJs, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

// Estructura para las tecnologías con iconos de FontAwesome
export interface Technology {
  name: string;
  icon: IconDefinition;
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
  imports: [CommonModule, FontAwesomeModule], // <-- Añadir FontAwesomeModule
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectListComponent {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  // Iconos para la plantilla
  faGithub = faGithub;
  faEye = faEye;

  protected readonly projects = signal<Project[]>([
    {
      imageUrl: 'assets/clicktocall-preview.png',
      translationKey: 'project1',
      technologies: [
        { name: 'JavaScript', icon: faJs },
        { name: 'HTML', icon: faHtml5 },
        { name: 'CSS', icon: faCss3Alt },
        { name: 'Chrome API', icon: faCode } // Usando un icono genérico
      ],
      liveDemoUrl: 'https://chromewebstore.google.com/detail/clicktocall-premium-number/hcdjknjpbnhdmpdkeofgmafdcepdbjfg?hl=es',
      githubUrl: 'https://github.com/edarlinae/ClickToCall'
    },
    {
      imageUrl: 'assets/weather-app-preview.jpg',
      translationKey: 'project2',
      technologies: [
        { name: 'Angular', icon: faAngular },
        { name: 'TypeScript', icon: faCode }, // faCode como sustituto de TS
        { name: 'Bootstrap', icon: faBootstrap }
      ],
      liveDemoUrl: 'https://weather-app-edarlinae.vercel.app/',
      githubUrl: 'https://github.com/edarlinae/Weather-App'
    },
    {
      imageUrl: 'assets/apego-consciente.png',
      translationKey: 'project3',
      technologies: [
        { name: 'Angular', icon: faAngular },
        { name: 'TypeScript', icon: faCode }, // faCode como sustituto de TS
        { name: 'SCSS', icon: faSass },
        { name: 'Figma', icon: faFigma }
      ],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/edarlinae/apego-consciente'
    },
    {
      imageUrl: 'assets/kairosgab.png',
      translationKey: 'project4',
      technologies: [
        { name: 'Angular', icon: faAngular },
        { name: 'TypeScript', icon: faCode }, // faCode como sustituto de TS
        { name: 'SCSS', icon: faSass }
      ],
      liveDemoUrl: 'https://www.gabinetekairos.es/',
      githubUrl: 'https://github.com/edarlinae/kairos-web'
    }
  ]);

  getProjectTranslation(key: 'project1' | 'project2' | 'project3' | 'project4'): ProjectTranslations {
    return this.t()[key];
  }
}