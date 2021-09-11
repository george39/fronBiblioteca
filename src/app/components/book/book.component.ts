import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [
  ]
})
export class BookComponent implements OnInit {

  public book: Book;
  public title: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.title = 'Crear un libro';
    this.book = new Book('', '', 0, '');
   }

  ngOnInit(): void {
  }

/**************************************************************************
CREAR UN LIBRO
***************************************************************************/
  onSubmit(bookForm: any){
    
    this.bookService.saveUser(this.book).subscribe(
      response => {
        if(response.book){          
          bookForm.reset();
          this.router.navigate(['/list-book']);
        }else{
          
        }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
