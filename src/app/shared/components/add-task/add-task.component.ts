import { Component, OnInit } from "@angular/core";
import { ITask } from "src/app/core/models/task.model";
import { TaskService } from "src/app/core/services/task-service/task.service";
import { ModalService } from "./../../utilities/modal.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-add-task-modal",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  newTaskForm!: FormGroup;
  disabled = true;

  constructor(
    private fb: FormBuilder,
    private _taskService: TaskService,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.newTaskForm = this.fb.group({
      id: [null],
      title: ["", [Validators.required, Validators.minLength(5)]],
      description: [""],
      published: [false],
    });

    this._modalService.showModal$.subscribe((showModal) => {
      if (showModal) {
        this.resetForm();
      }
    });
  }

  saveTask(): void {
    if (this.newTaskForm.valid && this.newTaskForm.touched) {
      this._taskService.addTask(this.newTaskForm.value).subscribe();
      this._taskService.getTasks().subscribe();
      this.resetForm();
    }
  }

  resetForm(): void {
    this.newTaskForm.reset({
      id: null,
      published: false,
    });
  }

  closeModal(): void {
    this._modalService.closeModal();
  }
}
