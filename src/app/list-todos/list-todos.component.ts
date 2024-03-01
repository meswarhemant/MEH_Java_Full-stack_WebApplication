import { Component } from '@angular/core';
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetdate: Date
  ){

  }

}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
todos=[
  new Todo(1, "Get up in morning", false, new Date()),
  new Todo(2, "Study Hard", false, new Date()),
  new Todo(3, "Get a Job", false, new Date())
]

}
