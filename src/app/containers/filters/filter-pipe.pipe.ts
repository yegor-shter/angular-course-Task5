import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../../task-view-container/interfaces/ITodo.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<ITodo>, searchTitle: string, searchId: number): any {
    // ( !searchId || !searchTitle)
    // ?  items
    // : items.filter(item => item.title.indexOf(searchTitle) || (item.id = searchId) !== -1);
    if (items && items.length) {
      return items.filter(item => {
        if (searchTitle && item.title.toLowerCase().indexOf(searchTitle.toLowerCase()) === -1) {
          return false;
        }
        if (searchId && (item.id.toString().indexOf(searchId.toString())) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }

}
}
