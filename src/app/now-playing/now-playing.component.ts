import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
  providers: [CategoryService]
})
export class NowPlayingComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
