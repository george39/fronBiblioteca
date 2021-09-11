import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(items: any, term: any): any {
		if(term === undefined) {
			return items;
		}


    return items.filter(function(item:any){
			return item.name.toLowerCase().includes(term.toLowerCase());
			
		});
	}

}
