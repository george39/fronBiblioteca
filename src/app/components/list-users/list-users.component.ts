import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [
  ]
})
export class ListUsersComponent implements OnInit {

  public title: any;
  public user: any;
  public identity: any;
  public busqueda: any;

  constructor(
    
    private userService: UserService,
  ) {
    this.user = Array(User);
    this.busqueda = '';
    this.title = 'Listado de usuarios';
   }

  ngOnInit(): void {
    this.getBooks();
    this.identity = this.userService.getIdentity();
  }

  ngDoCheck(){
  	this.identity = this.userService.getIdentity();
  }

  /***********************************************
   LISTAR TODOS LOS LIBROS
  /***********************************************/
  getBooks(){
    this.userService.getUsers().subscribe(
      response => {
        this.user = response.user;
        console.log('usero', this.user);
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
