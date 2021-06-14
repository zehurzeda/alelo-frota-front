import { Vehicle } from './../../model/vehicle.model';
import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { interval, Subscription } from 'rxjs';
import { Pageable } from 'src/app/model/pageable-response.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrashAlt;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  isLoading: boolean = true;
  page: Pageable = {
    pageSize: 10,
    pageNumber: 1,
  };
  subscription: Subscription = new Subscription();

  vehicles: Array<Vehicle> = [];
  totalPages: number = 0;
  last: boolean = true;
  first: boolean = true;
  filter!: string;

  plateSearch = new FormControl('');

  constructor(private service: VehicleService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.listAllVehicles();

    this.subscription.add(
      this.plateSearch.valueChanges.pipe(
        tap(() => this.isLoading = true),
        debounceTime(1000)
      ).subscribe(value => {
        this.filter = value;
        
        this.listAllVehicles();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  listAllVehicles() {
    console.log(this.filter);
    this.service.listAllVehicles(this.page, this.filter).subscribe((res) => {
      this.vehicles = res.content;
      this.totalPages = res.totalPages;
      this.first = res.first;
      this.last = res.last;
    });
  }

  nextPage() {
    this.page.pageNumber = this.page.pageNumber + 1;
    this.listAllVehicles();
  }

  previousPage() {
    this.page.pageNumber = this.page.pageNumber - 1;
    this.listAllVehicles();
  }

  goToPage(pageNumber: number) {
    this.page.pageNumber = pageNumber;
    this.listAllVehicles();
  }
}
