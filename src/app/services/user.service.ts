import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONNECTION } from './connection';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: any;
	public identity: any;
	public token: any;

  constructor(
    private http: HttpClient,
    
  ) {
    this.url = CONNECTION.url;
   }


   /**************************************************************************
   CREAR UN USUARIO
   ***************************************************************************/
   saveUser(user: any): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders({'Content-Type': 'application/json'});

		

		return this.http.post(this.url+ 'save-user', params, {headers});
	}


  /**************************************************************************
  LOGIN DE USUARIOS
  ***************************************************************************/
  login(user_to_login: any, gettoken = null): Observable<any>{
		if(gettoken != null){
			user_to_login.gettoken = gettoken;
		}
		let params = JSON.stringify(user_to_login);
		let headers = new HttpHeaders({'Content-Type': 'application/json'});

		return this.http.post(this.url+ 'login', params, {headers: headers});
	}




	/**************************************************************************
  EDITAR UN USUSARIO
  ***************************************************************************/
  editUser(id: any, user:any): Observable<any>{
	let params = JSON.stringify(user);
	let headers = new HttpHeaders({'Content-Type': 'application/json'
		
	});

	return this.http.put(this.url + 'update-user/' + id, params, {headers});
}




/***********************************************
   LISTAR UN USUARIO
  /***********************************************/
  getUser(id:any): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json'
    }));

    return this.http.get(this.url + 'get-user/' + id, {headers});
  }



  /**************************************************************************
  LISTAR TODOS LOS USUARIO
  ***************************************************************************/
  getUsers(): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json',      
    }));


    return this.http.get(this.url + 'get-users', {headers});
  }




  getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity')!);

		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}
		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token');

		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}
		return this.token;
	}
}
