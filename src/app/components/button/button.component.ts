import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() click = new EventEmitter<MouseEvent>();

  @Input()
  hoverColor: string = 'bg-neutral-800';

  @Input()
  color: string = 'bg-neutral-white';

  @Input()
  textColor: string = 'text-neutral-black';

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: MouseEvent | undefined) {
    event?.stopPropagation();
    event?.preventDefault();
    this.click.emit(event);
  }

}
