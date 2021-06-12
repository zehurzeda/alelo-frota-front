import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent extends Input implements OnInit {

  @Input()
  placeholder: String = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
