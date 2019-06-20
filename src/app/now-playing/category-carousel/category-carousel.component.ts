import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../collection.model';
import { Category } from '../../category.model';
import { CollectionService } from '../../services/collection.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.css'],
  providers: [CollectionService]
})
export class CategoryCarouselComponent implements OnInit {

  @Input() thisCategory: Category;
  @Input() thisCategoryId: string;

  theseCollections: FirebaseListObservable<any[]>;
  hoverCollection: string = '';

  setHoverCollection(string) {
    this.hoverCollection = string;
  }

  clearHoverCollection() {
    this.hoverCollection = null;
  }

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.theseCollections = this.collectionService.getCollections();
  }

}
