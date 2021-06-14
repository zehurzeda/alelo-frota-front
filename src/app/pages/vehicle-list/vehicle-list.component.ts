import { DeleteConfirmationModalComponent } from './../../components/delete-confirmation-modal/delete-confirmation-modal.component';
import { Vehicle } from './../../model/vehicle.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { interval, Subscription, throwError } from 'rxjs';
import { Pageable } from 'src/app/model/pageable-response.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  @ViewChild(DeleteConfirmationModalComponent)
  confirmationModal!: DeleteConfirmationModalComponent;

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

  idVehicleToDelete!: number;

  plateSearch = new FormControl('');

  errorMessage!: string;
  deleteStatus!: string;

  constructor(private service: VehicleService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription.add(this.listAllVehicles().subscribe());

    this.subscription.add(
      this.plateSearch.valueChanges
        .pipe(
          tap(() => (this.isLoading = true)),
          debounceTime(1000),
          tap((value) => (this.filter = value)),
          switchMap(() => this.listAllVehicles())
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  listAllVehicles() {
    return this.service.listAllVehicles(this.page, this.filter).pipe(
      catchError((error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
        return throwError(error);
      }),
      tap((res) => {
        this.vehicles = res.content;
        this.totalPages = res.totalPages;
        this.first = res.first;
        this.last = res.last;
      })
    );
  }

  nextPage() {
    this.page.pageNumber = this.page.pageNumber + 1;
    this.listAllVehicles().subscribe();
  }

  previousPage() {
    this.page.pageNumber = this.page.pageNumber - 1;
    this.listAllVehicles().subscribe();
  }

  goToPage(pageNumber: number) {
    this.page.pageNumber = pageNumber;
    this.listAllVehicles().subscribe();
  }

  openConfirmationDelete(idVehicle: number) {
    this.idVehicleToDelete = idVehicle;
    this.confirmationModal.toggleModal();
  }

  deleteVehicle() {
    this.service
      .deleteVehicle(this.idVehicleToDelete)
      .pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          return throwError(error);
        }),
        tap(() => (this.deleteStatus = 'Delete successful')),
        switchMap(() => this.listAllVehicles())
      )
      .subscribe();
  }
}
