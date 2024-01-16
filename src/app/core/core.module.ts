import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task-service/task.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [TaskService]
})
export class CoreModule { }
