import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipe implements PipeTransform {

  transform(items: any, term: any): any {
		if(term === undefined) {
			return items;
		}


    return items.filter(function(item:any){
			return item.document.includes(term.toLowerCase());
			
		});
	}

}
