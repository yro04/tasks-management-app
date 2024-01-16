import { Component, OnInit } from "@angular/core";
import { ITask } from "src/app/core/models/task.model";
import { TaskService } from "../../../core/services/task-service/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  constructor(private _taskService: TaskService) {}
  tasks: ITask[] = [];

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this._taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  completeTask(task: ITask): void {
    task.published = !task.published;
  }

  editTask(task: ITask): void {
    // Implement edit functionality
    console.log(`Editing task: ${task.title}`);
  }

  deleteTask(task: ITask): void {
    // Implement delete functionality
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}
