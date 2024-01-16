import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITask } from "../../models/task.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private apiUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.baseUrl}`;
    this.baseUrl = "tasks";
  }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.apiUrl}/${this.baseUrl}`);
  }

  addTask(newTask: ITask): Observable<ITask> {
    const newCreatedTask = {
      title: newTask.title,
      description: newTask.description,
      published: newTask.published,
    };
    return this.http.post<ITask>(
      `${this.apiUrl}/${this.baseUrl}`,
      newCreatedTask
    );
  }

  updateTask(updatedTask: ITask): Observable<ITask> {
    const updatedValues = {
      description: updatedTask.description,
      published: updatedTask.published,
    };

    console.log(updatedTask);
    return this.http.patch<ITask>(
      `${this.apiUrl}/${this.baseUrl}/${updatedTask.id}`,
      updatedValues
    );
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.baseUrl}/${taskId}`);
  }
}
