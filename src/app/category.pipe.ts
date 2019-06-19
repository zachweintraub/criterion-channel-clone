import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './collection.model';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input: Collection[], categoryId: string) {
    let output: Collection[] = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].category.includes(categoryId)) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
