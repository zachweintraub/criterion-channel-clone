import { Content } from "./content.model";

export class Collection {
    constructor(public name: string, public description: string, public category: string[], public thumbnail: string, public featured: boolean){}
}
