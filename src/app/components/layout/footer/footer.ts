import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation'; // <-- RUTA CORREGIDA

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;
}