import { Component } from '@angular/core';
import { ModalService } from '../../utilities/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  brandName: string = 'TaskApp';
  constructor(private _modalService: ModalService) {}

  openAddTaskModal(): void {
    this._modalService.openModal();
  }
  navLinks: { label: string, url?: string }[] = [
        { label: 'Add Task' },
    ];
}
