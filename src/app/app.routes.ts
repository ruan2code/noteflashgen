import { Routes } from '@angular/router';
import { TakeNote } from './take-note/take-note';
import { NotesView } from './notes-view/notes-view';

export const routes: Routes = [
    {
        path: 'take-note',
        component: TakeNote
    },
    {
        path: 'notes',
        component: NotesView
    },
];
