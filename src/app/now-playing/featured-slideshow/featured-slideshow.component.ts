import { Component, OnInit } from '@angular/core';
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

  currentSlide: string;

  selectSlide(id: string) {
    document.querySelector(`#${this.currentSlide}`).classList.remove('current');
    this.currentSlide = 'slide' + id;
    document.querySelector(`#${this.currentSlide}`).classList.add('current');
  }

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.featuredCollections = this.collectionService.getCollections();
    this.currentSlide = 'slide0';
    setTimeout(()=>{this.selectSlide('0')},400);
  }
  
}
