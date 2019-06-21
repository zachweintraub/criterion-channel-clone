import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './collection.model';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input: Collection[], categoryId: string, startIndex: number = 0) {
    if(input) {
      let output: Collection[] = [];
      for(let i = startIndex; i < input.length; i++) {
        if(input[i].category.includes(categoryId) && output.length < 4) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
