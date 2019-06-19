import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Collection } from '../collection.model';
import { CategoryService } from '../services/category.service';
import { CollectionService } from '../services/collection.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [
    CategoryService,
    CollectionService
  ]
})
export class AdminComponent implements OnInit {
  
  categories: FirebaseListObservable<any[]>;

  constructor(private categoryService: CategoryService, private collectionService: CollectionService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  submitCategory(name) {
    let newCategory: Category = new Category(name);
    this.categoryService.addCategory(newCategory);
  }

  submitCollection() {

  }

}
