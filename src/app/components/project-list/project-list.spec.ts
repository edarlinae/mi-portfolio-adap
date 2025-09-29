import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//Estructura para las tecnologías
export interface Technology {
  name: string;
  iconUrl: string | null; 
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[]; 
  githubUrl: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {
  protected readonly projects = signal<Project[]>([
    {
      title: 'ClickToCall - Extensión de Chrome',
      description: 'Extensión compleja que detecta teléfonos en webs y permite llamar o enviar WhatsApps vía API, inyectando UI dinámica en las páginas.',
      technologies: [
        { name: 'JavaScript (ES6+)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Chrome Extension API', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlechrome/googlechrome-original.svg' }
      ],
      githubUrl: 'https://github.com/edarlinae/Prueba-CTCB'
    },
    {
      title: 'Weather App',
      description: 'Aplicación web completa para consultar el tiempo, con modo oscuro, multi-idioma y historial de búsquedas, consumiendo una API REST.',
      technologies: [
        { name: 'JavaScript (ES6+)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'API REST', iconUrl: null } 
      ],
      githubUrl: 'https://github.com/edarlinae/Weather-App'
    }
  ]);
}