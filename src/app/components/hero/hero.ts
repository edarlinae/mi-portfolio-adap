import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation'; // <-- RUTA CORRECTA PARA ESTE NIVEL

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;
}