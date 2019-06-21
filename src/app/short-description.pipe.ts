import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(input: string) {
    if(input.length > 200) {
      let shortened = input.substring(0,200) + "...";
      return shortened;
    } else {
      return input;
    }
  }

}
