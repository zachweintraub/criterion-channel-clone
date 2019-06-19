import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Collection } from '../collection.model';

@Injectable()
export class CollectionService {

  collections: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.collections = this.database.list('collections');
  }

  getCollections() {
    return this.collections;
  }

  addCollection(collection: Collection) {
    this.collections.push(collection);
  }

}
