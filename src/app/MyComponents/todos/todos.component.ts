import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  standalone:true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit
{
  todos:Todo[]=[];
 
  constructor(){ 
    let localItem=localStorage.getItem("todos");

    if(localItem==null){
    this.todos=[];
  }else{
    this.todos=JSON.parse(localItem);
   }
  }
      // {
      //   sno:1,
      //   title:"Learn Angular",
      //   desc:"Study directives",
      //   active:true
      // },
      // {
      //   sno:2,
      //   title:"Practice",
      //   desc:"Build a project",
      //   active:true
      // },
      // {
      //   sno:3,
      //   title:"Full Stack Developer",
      //   desc:"Study Backend as well as Frontend",
      //   active:true
      // }

  ngOnInit(): void{}
  
  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active =! this.todos[index].active;
  
    console.log(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos));
    
  }
}
