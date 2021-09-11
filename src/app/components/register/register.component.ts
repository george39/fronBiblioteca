import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public title: any;
  public user: User

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.title = 'Crear usuarios',
    this.user = new User('', '', '', '', '', '')
   }

  ngOnInit(): void {
  }


  onSubmit(userForm: any){
    
    this.userService.saveUser(this.user).subscribe(
      response => {
        if(response.user){          
          userForm.reset();
          this.router.navigate(['/list-user']);
        }else{
          
        }
        },
        error => {
          console.log(<any>error);
        }
      );
  }

}
