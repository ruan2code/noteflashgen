import { Component, inject, signal } from '@angular/core';
import { NotesDataService } from '../notes-data-service';
import { Note } from '../models/note';

@Component({
  selector: 'app-take-note',
  imports: [],
  templateUrl: './take-note.html',
  styleUrl: './take-note.css',
})
export class TakeNote {
  private readonly noteDataService = inject(NotesDataService);
  // readonly newNoteInput: Note = signal<Note>({ nodeId: 0, noteInput: '' });
  readonly noteInput = signal<string>('');

  submitNote(): void {
    const noteToAdd: Note = {
      nodeId: crypto.randomUUID(),
      noteInput: this.noteInput(),
    };
    this.noteDataService.addNote(noteToAdd);
    this.noteInput.set('');
  }

}
