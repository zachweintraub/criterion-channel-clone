import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Category } from '../category.model';

@Injectable()
export class CategoryService {
  
  categories: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.categories = database.list('categories');
  }

  getCategories() {
    return this.categories;
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }
}
