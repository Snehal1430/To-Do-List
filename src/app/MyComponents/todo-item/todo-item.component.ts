import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../todos/Todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit
{
  @Input() todo!: Todo;
  @Input() i!:Number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.todoDelete.emit(this.todo);
    console.log("Delete clicked:", this.todo);
  }

  onCheckboxClick() {
    this.todoCheckbox.emit(this.todo);      //update first
    this.todo.active = !this.todo.active;   //then emit
    console.log("Checkbox toggled:", this.todo);
  }
}

