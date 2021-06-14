import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss'],
})
export class DeleteConfirmationModalComponent implements OnInit {
  @ViewChild('modal', { static: false }) child: any;

  @Output() confirm = new EventEmitter<MouseEvent>();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.child.toggleModal();
  }

  onConfirmClick($event: any) {
    this.confirm.emit($event);
    this.toggleModal();
  }
}
