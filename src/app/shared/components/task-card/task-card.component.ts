// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { ITask } from 'src/app/core/models/task.model';

// @Component({
//   selector: 'app-task-card',
//   templateUrl: './task-card.component.html',
//   styleUrls: ['./task-card.component.css']
// })
// export class TaskCardComponent {
//   @Input() task!: ITask;
//   @Output() complete = new EventEmitter<void>();
//   @Output() edit = new EventEmitter<void>();
//   @Output() delete = new EventEmitter<void>();

//   completeTask(): void {
//     this.complete.emit();
//   }

//   editTask(): void {
//     this.edit.emit();
//   }

//   deleteTask(): void {
//     this.delete.emit();
//   }
// }

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ITask } from "src/app/core/models/task.model";
import { TaskService } from "src/app/core/services/task-service/task.service";

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.css"],
})
export class TaskCardComponent {
  @Input() task!: ITask;
  @Output() complete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor(private _taskService: TaskService) {}

  publishedTask(task: ITask): void {
    this.complete.emit();
    this._taskService.updateTask(task).subscribe();
  }

  toggleEdit(task: ITask): void {
    this.task.editing = !this.task.editing;
    this.edit.emit();
    if (!this.task.editing) {
      this._taskService.updateTask(task).subscribe();
    }
  }

  deleteTask(id: number): void {
    this.delete.emit();
    this._taskService.deleteTask(id).subscribe();
  }
}
