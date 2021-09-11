import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styles: [
  ]
})
export class ListBookComponent implements OnInit {

  public title: any;
  public book: any;
  public identity: any;
  public busqueda: any;

  constructor(
    private bookService: BookService,
    private userService: UserService,
  ) {
    this.book = Array(Book);
   
    this.title = 'Listado de libros';
   }

  ngOnInit(): void {
    this.getBooks();
    this.identity = this.userService.getIdentity();
    this.busqueda = '';
  }

  ngDoCheck(){
  	this.identity = this.userService.getIdentity();
  }

  /***********************************************
   LISTAR TODOS LOS LIBROS
  /***********************************************/
  getBooks(){
    this.bookService.getBooks().subscribe(
      response => {
        this.book = response.book;
        console.log('booko', this.book);
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
