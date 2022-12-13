import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: Array<any>

  constructor(private todoService : TodoService) { 
    this.todo = new Array<any>()
  }

  ngOnInit(): void {
  }

  getToDo() {
    this.todoService.getToDo().subscribe((todo) => {
      this.todo = todo
    })
  }
}
