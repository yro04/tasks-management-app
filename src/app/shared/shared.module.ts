import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";

import { TaskComponent } from "./components/task/task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskCardComponent } from "./components/task-card/task-card.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";

import { FormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatFormFieldModule } from "@angular/material/form-field";

import { MatInputModule } from "@angular/material/input";
import { LineBreakPipe } from "./pipes/line-break/linebreak.pipe";

import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  ReactiveFormsModule
];
@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskCardComponent,
    LineBreakPipe,
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES,
  ],
  exports: [TaskComponent, MATERIAL_MODULES, ],
})
export class SharedModule {}
