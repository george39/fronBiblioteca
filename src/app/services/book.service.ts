import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONNECTION } from './connection';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  public url: any;

  constructor(
    private http: HttpClient
  ) {
    this.url = CONNECTION.url;
   }


  /**************************************************************************
   CREAR UN LIBRO
   ***************************************************************************/
   saveUser(book: any): Observable<any>{
		let params = JSON.stringify(book);
		let headers = new HttpHeaders({'Content-Type': 'application/json'});		

		return this.http.post(this.url + 'save-book', params, {headers});
	}



  /**************************************************************************
  LISTAR TODOS LOS LIBRO
  ***************************************************************************/
  getBooks(): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json',      
    }));


    return this.http.get(this.url + 'get-books', {headers});
  }



  /**************************************************************************
  EDITAR UN LIBRO
  ***************************************************************************/
  editBook(id: any, book:any): Observable<any>{
		let params = JSON.stringify(book);
		let headers = new HttpHeaders({'Content-Type': 'application/json'
			
		});

		return this.http.put(this.url + 'update-book/' + id, params, {headers});
	}


  /***********************************************
   LISTAR UN LIBRO
  /***********************************************/
  getBook(id:any): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json'
    }));

    return this.http.get(this.url + 'get-book/' + id, {headers});
  }
}
