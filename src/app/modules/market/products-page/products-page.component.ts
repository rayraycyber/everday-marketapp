import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {
  categories: Category[] = [
     {name: 'Aston Martin'},
     {name: 'Ferrari'},
     {name: 'McLaren'},
     {name: 'Alpine'},
     {name: 'RB'},
  ];
   selectedCategory!: Category;

    constructor(private readonly categoriesService: CategoriesService) { }
    
    ngOnInit() {
      this.categories = this.categoriesService.loadCategories();
    }

    onCategoryChanged(category: Category) {
      this.selectedCategory = category;
      alert(category.name);
    }
    
}
