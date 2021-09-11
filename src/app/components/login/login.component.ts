import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public title: any;
  public user: User;
  public token: any;
  public gettoken: any;
  public identity: any;
  public status: any;

  constructor(
    private route: ActivatedRoute,
  	private router: Router,
    private userService: UserService
  ) {
    this.title = 'Iniciar sesión';
    this.user = new User('', '', '', '', '', '');
    this.gettoken = true; 
   }

  ngOnInit(): void {
    console.log(this.userService.getIdentity());
    console.log(this.userService.getToken());
  }


  onSubmit(){
    this.userService.login(this.user).subscribe(
      response => {
        this.identity = response.user;

        if(!this.identity || !this.identity._id){
          alert('El usuario no se ha logueado correctamente')
        }else{
          this.identity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //Conseguir el token
          this.userService.login(this.user, this.gettoken).subscribe(
            response => {
              this.token = response.token;

              if(this.token <= 0){
                alert('El token no se ha generado');
              }else{
                localStorage.setItem('token', this.token);
                this.status = 'success';
                this.router.navigate(['/home']);
              }
            },
            error => {
              console.log(<any>error);
            }
          );

          
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

}
