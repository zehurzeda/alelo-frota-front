import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  faTimes = faTimes;

  isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isOpened = !this.isOpened;
  }

}
