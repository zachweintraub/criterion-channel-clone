import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './collection.model';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(input: Collection[], featured: boolean) {
    let output: Collection[] = [];
    if(input) {
      for(let i = 0; i < input.length; i++) {
        if(input[i].featured) {
          if(output.length < 1) {
            output.push(input[i]);
          }
        }
      }
    }
    return output;
  }

}
