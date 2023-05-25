import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
  todoarray: Array<string> = [] // here we created one filed instace
  constructor(private _todoService: TodoService) {} //injecct here//take it in todocard // so creat one field in constructor()

  ngOnInit(): void {
    console.log(this._todoService.getToDos());
    this.todoarray = this._todoService.getToDos() // when comp is initialize
  }

}
