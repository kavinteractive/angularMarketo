import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent }  from './app.component';
import { User } from './components/user.component'
import { PageNotFound } from './components/PageNotFound.component';
import {HomeComponent} from './components/home.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'test', component: User},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', component:PageNotFound}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, User, PageNotFound, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
