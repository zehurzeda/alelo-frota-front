import { Component, OnInit } from '@angular/core';
import {
  faCarSide,
  faChartBar,
  faTachometerAlt,
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

  constructor() {}

  ngOnInit(): void {}
}
