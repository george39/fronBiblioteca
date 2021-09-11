import {Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./components/book/book.component";
import { LendBookComponent } from "./components/book/lend-book.component";
import { ListBookComponent } from "./components/book/list-book.component";
import { ReturnBookComponent } from "./components/book/return-book.component";
import { HomeComponent } from "./components/home/home.component";
import { ListUsersComponent } from "./components/list-users/list-users.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'save-user', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'save-book', component: BookComponent},
    {path: 'list-book', component: ListBookComponent},
    {path: 'list-user', component: ListUsersComponent},
    {path: 'lend-book/:id', component: LendBookComponent},
    {path: 'return-book/:id', component: ReturnBookComponent},
    {path: '**', component: HomeComponent}
 ];
 
 
 
 
 
 export const APP_ROUTES = RouterModule.forRoot(appRoutes);