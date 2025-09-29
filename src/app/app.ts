import { Component, HostListener, signal } from '@angular/core';

import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { Hero } from './components/hero/hero';
import { ProjectList } from './components/project-list/project-list';
import { ContactForm } from './components/contact-form/contact-form';
import { Experience } from './components/experience/experience';
import { AboutMe } from './components/about-me/about-me';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    Header,
    Footer,
    Hero,
    ProjectList,
    ContactForm,
    Experience,
    AboutMe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-final';

  // --- LÓGICA DEL BOTÓN DE SCROLL (NUEVO) ---
  showScrollButton = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
  
    if (window.scrollY > 300) {
      this.showScrollButton.set(true);
    } else {
      this.showScrollButton.set(false);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // --- FIN DE LA LÓGICA DEL BOTÓN ---
}