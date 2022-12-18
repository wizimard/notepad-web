import { Injectable } from '@angular/core';
import { CategoryType, NoteType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  categories: CategoryType[] = [];
  notes: NoteType[] = [];

  isLoadingCategories = false;
  isLoadingNotes = false;

  errorCategory = '';
  errorNote = '';

  constructor() { }


}
