import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  protected readonly email = signal('caparrosmasiaalicia@gmail.com');
  protected readonly phone = signal('676 28 40 60');
}