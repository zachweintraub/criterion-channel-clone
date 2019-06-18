import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../collection.model';
import { Category } from '../../category.model';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.css']
})
export class CategoryCarouselComponent implements OnInit {

  @Input() thisCategory: Category;

  constructor() { }

  ngOnInit() {
  }

}
