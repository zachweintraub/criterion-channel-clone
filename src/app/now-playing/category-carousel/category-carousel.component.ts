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

  constructor(private collectionService: CollectionService) {
    // this.theseCollections = [];
  }

  ngOnInit() {
    this.theseCollections = this.collectionService.getCollections();

    // let observable = this.collectionService.getCollections();
    // let temp = [];
    // observable.subscribe(collectionData => {
    //   for(let object of collectionData) {
    //     this.theseCollections.push(object);
    //   }
    // });
    // for(let collection of temp) {
    //   let newCollection: Collection = new Collection(collection.name, collection.description, collection.category, collection.thumbnail, collection.featured);
    //   this.theseCollections.push(newCollection);
    // }
    // console.log(this.theseCollections);
  }

}
