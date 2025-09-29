import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, ProjectTranslations } from '../../services/translation';

export interface Project {
  imageUrl: string;
  translationKey: 'project1' | 'project2' | 'project3' | 'project4';
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectListComponent {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  protected readonly projects = signal<Project[]>([
    {
      imageUrl: 'assets/clicktocall-preview.png',
      translationKey: 'project1',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API REST'],
      liveDemoUrl: 'https://chromewebstore.google.com/detail/clicktocall-premium-number/hcdjknjpbnhdmpdkeofgmafdcepdbjfg?hl=es',
      githubUrl: 'https://github.com/edarlinae/ClickToCall'
    },
    {
      imageUrl: 'assets/weather-app-preview.jpg',
      translationKey: 'project2',
      technologies: ['Angular', 'TypeScript', 'API REST', 'Bootstrap'],
      liveDemoUrl: 'https://weather-app-edarlinae.vercel.app/',
      githubUrl: 'https://github.com/edarlinae/Weather-App'
    },
    {
      imageUrl: 'assets/apego-consciente.png',
      translationKey: 'project3',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Figma'],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/edarlinae/apego-consciente'
    },
    {
      imageUrl: 'assets/kairosgab.png', // <-- Nombre de imagen verificado
      translationKey: 'project4',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      liveDemoUrl: 'https://www.gabinetekairos.es/',
      githubUrl: 'https://github.com/edarlinae/kairos-web'
    }
  ]);

  getProjectTranslation(key: 'project1' | 'project2' | 'project3' | 'project4'): ProjectTranslations {
    return this.t()[key];
  }
}