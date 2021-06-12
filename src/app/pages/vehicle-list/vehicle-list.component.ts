import { Component, OnInit } from '@angular/core';
import { faSearch, faEdit, faTrashAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrashAlt;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {

  }

  previousPage() {

  }

  goToPage(pageNumber: number) {
    
  }

}
