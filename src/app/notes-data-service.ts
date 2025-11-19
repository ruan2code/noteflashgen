import { Injectable, signal } from '@angular/core';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesDataService {
  private readonly _notes = signal<Note[]>([]);
  readonly notes = this._notes.asReadonly();

  addNote(note: Note): void {
    this._notes.update((notes) => [...notes, note]);
  }
}


