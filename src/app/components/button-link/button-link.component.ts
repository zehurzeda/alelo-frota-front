import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {

  @Input()
  link: string = '';

  @Input()
  hoverColor: string = 'bg-gray-200';

  @Input()
  color: string = 'bg-white';

  @Input()
  textColor: string = 'text-black';

  constructor() { }

  ngOnInit(): void {
  }

}
