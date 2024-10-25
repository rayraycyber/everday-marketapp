import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Category } from '../../../model';

@Injectable({
  providedIn: CoreModule
})
export class CategoriesService {
  loadCategories(): Category[] {
    return[
      {name: 'Aston Martin'},
     {name: 'Ferrari'},
     {name: 'McLaren'},
     {name: 'Alpine'},
     {name: 'RB'},
    ]
  }
  constructor() { }
}

