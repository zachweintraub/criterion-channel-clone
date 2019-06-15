import { Collection } from './collection.model';

export class Content {
    constructor(public name: string, public description: string, public details: Object, public thumbnail: string, public featured: boolean){}
    collections: Collection[] = [];
    addToCollection(collection: Collection) {
        this.collections.push(collection);
    }
}
