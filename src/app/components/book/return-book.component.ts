import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styles: [
  ]
})
export class ReturnBookComponent implements OnInit {

  public title: any;
  public user: any;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private userService: UserService
  ) {
    this.user = Array(User);
    this.title = 'Devolución libros';
    
    
   }

  ngOnInit(): void {
    this.getUser();
    
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


  onSubmit() {
    var id = this.user._id;
    console.log('id', id);
    this.user.status = '';
    this.user.idLibro = '';
    this.userService.editUser(id, this.user).subscribe(
      response => {
        this.user = response.book;
        alert('Se entregó el libro correctamente');
        this.router.navigate(['/list-user']);       

      },
      error => {
        console.log(error as any);
      }
    );
  }

}
