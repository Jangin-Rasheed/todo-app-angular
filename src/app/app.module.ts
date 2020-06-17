import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';
import {TodoContainerComponent} from './todo/todo-container/todo-container.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {BottombarComponent} from './bottombar/bottombar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoItemComponent,
    TodoContainerComponent,
    TodoListComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
