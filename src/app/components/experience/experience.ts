import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, JobTranslations } from '../../services/translation';

export interface Job {
  date: string;
  translationKey: 'job1' | 'job2';
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  protected readonly jobs = signal<Job[]>([
    {
      date: 'Febrero 2025 - Junio 2025',
      translationKey: 'job1'
    },
    {
      date: 'Agosto 2019 - Enero 2025',
      translationKey: 'job2'
    }
  ]);

  // traducción segura
  getJobTranslation(key: 'job1' | 'job2'): JobTranslations {
    return this.t()[key];
  }
}