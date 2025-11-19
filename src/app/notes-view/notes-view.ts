import { Component, computed, inject, signal } from '@angular/core';
import { NotesDataService } from '../notes-data-service';
import { OpenaiService } from '../openai-service';
import { Note } from '../models/note';
import { Flashcard } from '../models/flashcard';

@Component({
  selector: 'app-notes-view',
  imports: [],
  templateUrl: './notes-view.html',
  styleUrl: './notes-view.css',
})
export class NotesView {
  private readonly noteDataService = inject(NotesDataService);
  private readonly openAIService = inject(OpenaiService);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly flashcards = signal<Flashcard[]>([]);

  readonly notes = computed(() => this.noteDataService.notes() ?? []);

  async send(note: Note): Promise<void> {
    if (!prompt) return;

    this.loading.set(true);
    this.error.set(null);

    try {
      const reply = await this.openAIService.getOpenAiResponse(note);
      this.flashcards.update((cards) => [...cards, reply]);
    } catch (e) {
      console.error(e);
      this.error.set('OpenAI request failed. Check console for details.');
    } finally {
      this.loading.set(false);
    }
  }
}
