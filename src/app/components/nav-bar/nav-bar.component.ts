import { Component, OnInit } from '@angular/core';
import {
  faCarSide,
  faChartBar,
  faTachometerAlt,
  faBars
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  faCarSide = faCarSide;
  faChartBar = faChartBar;
  faTachometerAlt = faTachometerAlt;
  faBars = faBars;

  sideOpened = false;

  constructor() {}

  ngOnInit(): void {}

  togleSide() {
    console.log('test')
    this.sideOpened = !this.sideOpened
  }
}
