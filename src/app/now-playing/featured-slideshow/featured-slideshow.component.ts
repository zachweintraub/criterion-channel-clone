import { Component, OnInit } from '@angular/core';
import { Collection } from '../../collection.model';
import { CollectionService } from '../../services/collection.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-featured-slideshow',
  templateUrl: './featured-slideshow.component.html',
  styleUrls: ['./featured-slideshow.component.css'],
  providers: [CollectionService]
})
export class FeaturedSlideshowComponent implements OnInit {

  featuredCollections: FirebaseListObservable<any[]>;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.featuredCollections = this.collectionService.getCollections();
  }

}
