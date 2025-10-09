import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title!: string;
  desc!: string;
  @Output() todoAdd:EventEmitter<Todo> =new EventEmitter();
  
  onSubmit(){
    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
