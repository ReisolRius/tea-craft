import { Injectable } from '@angular/core';
import { Theme } from './theme';
import { THEMES } from './mock-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  getThemes(): Theme[] {
    return THEMES;
  }

  constructor() { }
}
