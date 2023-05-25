import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
        
  constructor(private _todoService : TodoService){ } // ng already create a oinstance we just inject itin

  ngOnInit() : void {

  }
  onTodoAdd(todo:HTMLInputElement){ //element ref is on input elem so type is htmlinputele calback func//method
    let val = todo.value;//we hv to send this value to array (todoservice)
    this._todoService.addTodoItem(val)
    todo.value = ''; // form reset
  }

}
