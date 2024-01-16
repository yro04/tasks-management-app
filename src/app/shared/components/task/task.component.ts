import { Component, OnInit } from "@angular/core";
import { ITask } from "src/app/core/models/task.model";
import { TaskService } from "src/app/core/services/task-service/task.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this._taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
