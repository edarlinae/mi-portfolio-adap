import { Component, signal, inject, HostListener, ElementRef } from '@angular/core';
import { TranslationService } from '../../../services/translation';
import { CommonModule } from '@angular/common';

interface Language {
  // Se añade 'gl' a los valores permitidos para 'code'
  code: 'es' | 'en' | 'fr' | 'ca' | 'gl';
  name: string;
  flagUrl: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private translationService = inject(TranslationService);
  private eRef = inject(ElementRef);
  public t = this.translationService.t;
  
  isLangMenuOpen = signal(false);

  languages: Language[] = [
    { code: 'es', name: 'Español', flagUrl: 'https://flagcdn.com/es.svg' },
    { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/gb.svg' },
    { code: 'fr', name: 'Français', flagUrl: 'https://flagcdn.com/fr.svg' },
    { code: 'ca', name: 'Català', flagUrl: 'assets/catalan-flag.png' },
    { code: 'gl', name: 'Galego', flagUrl: 'assets/galician-flag.png' }
  ];

  currentLanguage = signal<Language>(this.languages[0]);

  toggleLangMenu() {
    this.isLangMenuOpen.update(value => !value);
  }

  selectLanguage(lang: Language) {
    this.translationService.setLanguage(lang.code);
    this.currentLanguage.set(lang);
    this.isLangMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isLangMenuOpen.set(false);
    }
  }

  isDarkMode = signal(false);

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode.set(prefersDark);
    document.body.classList.toggle('dark-mode', prefersDark);
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}