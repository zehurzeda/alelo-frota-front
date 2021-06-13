import { Component, OnInit, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss']
})
export class DeleteConfirmationModalComponent implements OnInit {

  @ViewChild('modal', {static: false}) child: any;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.child.toggleModal();
  }

}
