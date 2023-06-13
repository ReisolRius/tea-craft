import { Injectable } from '@angular/core';
import { Type } from './type';
import { TYPES } from './mock-type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  getTypes(): Type[] {
    return TYPES;
  }

  constructor() { }
}
