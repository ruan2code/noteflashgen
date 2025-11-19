export interface Flashcard {
    flashcardId: string;
    noteId: string;
    question: string;
    answer: string;
}

export function toFlashcard(noteId: string, rawQA: RawQA): Flashcard { 
    return {
        flashcardId: crypto.randomUUID(),
        noteId: noteId,
        question: rawQA.question,
        answer: rawQA.answer,
    }
}

export interface RawQA {
  question: string;
  answer: string;
}
