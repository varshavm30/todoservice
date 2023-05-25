import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodocardComponent } from '../components/todocard/todocard.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackbar: MatSnackBar) { }

  openSnackbar(msg: string){
    //alert(msg)
    this._snackbar.open(msg, "close",{
      duration:3000,
      horizontalPosition:"left",         //this snackbar we can use anywhere in our project
      verticalPosition:"top"
    }) // masg and  action (btn value)
  }
}

// the example of using one srvice in another service