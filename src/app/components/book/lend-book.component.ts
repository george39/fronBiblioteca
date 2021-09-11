import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styles: [
  ]
})
export class LendBookComponent implements OnInit {

  
  

  public title: any;
  public book: any;
  public user: any;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService
  ) {
    this.title = 'Asignar un libro';
    this.book = []//Array(Book);//new Book('', '', 0, '', '', '');
    this.user = Array(User);
   
    
   }

  ngOnInit(): void {    
    //this.getBook();
    this.getUsers();
    this.getUser();
  }



  // ================================================
// FUNCION PARA SELECCIONAR UN OPERARIO
// ================================================



  /**************************************************************************
  LISTAR UN LIBRO 
  ***************************************************************************/
  getBook() {
    this.route.params.forEach((params) => {
      let id = params['id'];
      this.bookService.getBook(id).subscribe(
        response => {
          this.book = response.book;
          console.log('book', this.book);
  
        }
      );
    });
  }



  /**************************************************************************
  LISTAR UN USUARIO 
  ***************************************************************************/
  getUser() {
    this.route.params.forEach((params) => {
      let id = params['id'];
      this.userService.getUser(id).subscribe(
        response => {
          this.user = response.user;
          console.log('user', this.user);
  
        }
      );
    });
  }



  /**************************************************************************
  LISTAR TODOS LOS USUARIOS
  ***************************************************************************/
  getUsers() {
    
      this.userService.getUsers().subscribe(
        response => {
          this.user = response.user;
          console.log('user', this.user);
  
        }
      );
    
  }



  


  onSubmit() {
    var id = this.user._id;
    
    this.user.status = 'prestado';
    this.userService.editUser(id, this.user).subscribe(
      response => {
        this.book = response.book;
        this.router.navigate(['/list-user']);       

      },
      error => {
        console.log(error as any);
      }
    );
  }


  

}
