import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterCompletes',
  pure: false
})
export class FilterCompletesPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true): List[] {

    // lists.filter( list => list.finished === completed)
    return lists.filter( list => list.finished === completed);
  }

}
