import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { Flashcard, RawQA, toFlashcard } from './models/flashcard';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private _client: OpenAI = new OpenAI({
    baseURL: '',
    apiKey: '', 
    dangerouslyAllowBrowser: true, 
  });


  async getOpenAiResponse(note: Note): Promise<Flashcard> {
    const response = await this._client.responses.create({
      model: 'gpt-4.1',
      instructions: 'You are a brilliant flashcard generator. Generate concise flashcards based on the input text. Provide a question and an answer, each one sentence. Please format the response as JSON with "question" and "answer" fields.',
      input: note.noteInput,
    });
    const rawQA: RawQA = JSON.parse(response.output_text);
    const flashcard: Flashcard = toFlashcard(note.noteId, rawQA); 
    return flashcard;
  }
}
