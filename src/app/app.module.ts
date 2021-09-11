import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { ContentComponent } from './components/shared/content.component';
import { FooterComponent } from './components/shared/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTES } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { ListBookComponent } from './components/book/list-book.component';
import { LendBookComponent } from './components/book/lend-book.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ReturnBookComponent } from './components/book/return-book.component';
import { UserPipe } from './pipes/user.pipe';
import { SearchBookPipe } from './pipes/search-book.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BookComponent,
    ListBookComponent,
    LendBookComponent,
    ListUsersComponent,
    ReturnBookComponent,
    UserPipe,
    SearchBookPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
