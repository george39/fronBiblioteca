import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit, DoCheck{

  public identity: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.identity = this.userService.getIdentity();
  }

  ngDoCheck(){
  	this.identity = this.userService.getIdentity();
  }

  logout(){
  	localStorage.clear();
  	this.identity = null;
  	this.router.navigate(['/']);
  }

}
