import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from '../components/add-task/add-task.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject$ = new Subject<boolean>();
  public showModal$ = this.showModalSubject$.asObservable();

  constructor( private _dialog: MatDialog){}

  openModal(): MatDialogRef<AddTaskComponent> {
    this.showModalSubject$.next(true);
    const dialogRef = this._dialog.open(AddTaskComponent, {
      width: '400px',
      data: {},
      disableClose: false 
    });

    return dialogRef;
  }

  closeModal(): void {
    this.showModalSubject$.next(false);
    this._dialog.closeAll();
  }
}

  // addTask(): void {
  //     this._taskService.addTask(this.newTask).subscribe(() => {
  //       this.loadTasks();
  //     });
  //   }