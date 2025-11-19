import { Component, computed, inject } from '@angular/core';
import { NotesDataService } from '../notes-data-service';

@Component({
  selector: 'app-notes-view',
  imports: [],
  templateUrl: './notes-view.html',
  styleUrl: './notes-view.css',
})
export class NotesView {
  private readonly noteDataService = inject(NotesDataService);

  readonly notes = computed(() => this.noteDataService.notes() ?? []);

}
