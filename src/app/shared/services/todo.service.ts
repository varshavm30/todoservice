import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'                                                  // here instance root nd platform this two are singletone we can use in whole project
                                                                        //and if we created instance in comp that will avaible only in that comp and its child comp
})
export class TodoService {
 todoArray: Array<string> = [                                         // this data comes from backend api calling // here we created bidefault array
  "Angular"
 ]
  constructor(private _snackbar:SnackbarService,) { }// here we inject snackbar

  getToDos(){                                                    //take it in todocard // so creat one field
    return this.todoArray;                                      // here we create method which gives us array
                                              }                        // this we use in todocard ,, ng already inject instance in root so we hav to
                                                                      //inject that instance in card          
                                                                      //create filed if private then _(underscore)
  addTodoItem(item : string){
    this.todoArray.push(item)                                   // to add a data in arrray
    //alert (`${item} is added to ToDo List`)                   // popup when product is add to user // alrt for understanding
                                                               // we hv to use snackbar we create its separate service
    this._snackbar.openSnackbar(`${item} is added in Todo list successfully`)
  }

  removeTodoItem(){
    // item is remove
  }
}
// we r creating different service for snack bar bcoz we required the pop up in multiple way for differnt
//use so we cant use alert its not a proper way it will be dry principal
// so we hv inject snack bar service in constructor
// so we dont need to writediff functinality each time it will work automatically