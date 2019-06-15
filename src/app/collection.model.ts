import { Content } from "./content.model";

export class Collection {
    constructor(public name: string, public description: string, public thumbnail: string, public featured: boolean){}
    films: Content[] = [];

    addContent(content: Content) {
        this.films.push(content);
        content.addToCollection(this);
    }
}
