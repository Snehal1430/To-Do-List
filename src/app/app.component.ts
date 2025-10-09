import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { routes } from './app.routes';

//This is element selector
@Component({
  selector: 'app-root',
  standalone: true,    
  imports: [RouterOutlet,TodosComponent,TodoItemComponent,AddTodoComponent,FormsModule,AboutComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'to-do-list';
  constructor(){
    // setTimeout(() => {
    //   this.title="Changed Title";
    // }, 2000);

  }

  
}
