import { Component, Input, OnInit } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent implements OnInit {

  @Input()
  icon: any = faQuestion;

  @Input()
  title: string = '';

  @Input()
  selected: boolean = false;

  @Input()
  route: string = '/#';

  constructor() { }

  ngOnInit(): void {
  }

}
