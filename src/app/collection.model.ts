import { Content } from "./content.model";

export class Collection {
    constructor(public name: string, public description: string, public content: Content[], public thumbnail: string, public featured: boolean){}
}
