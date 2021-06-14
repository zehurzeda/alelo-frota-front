import { Vehicle } from './../../model/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { iif, of, throwError } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  vehicleForm = new FormGroup({
    plate: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    manufacturer: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    status: new FormControl(null, Validators.required),
  });

  vehicle!: Vehicle;
  idVehicle!: string;
  errorMessage!: string;

  get plateFormDisabled() {
    return this.vehicleForm.controls['plate'].disabled;
  }

  constructor(private service: VehicleService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.vehicleForm.valueChanges.subscribe((value) =>
      console.log(this.vehicleForm.getRawValue())
    );

    this.route.params
      .pipe(
        map((params) => params['id']),
        tap((value) => (this.idVehicle = value)),
        mergeMap((value) =>
          iif(
            () => value !== '0',
            this.findVehicleById(value),
            of(null).pipe(tap(() => this.vehicleForm.reset()))
          )
        )
      )
      .subscribe();
  }

  findVehicleById(id: string) {
    return this.service.findById(id).pipe(
      catchError((error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
        return throwError(error);
      }),
      tap((value) => {
        this.vehicleForm.controls['plate'].disable();
        this.vehicleForm.patchValue(value);
      })
    );
  }

  submitForm() {
    if (this.vehicleForm.invalid) {
      return;
    }

    if (this.idVehicle === '0') {
      this.service
        .save(this.vehicleForm.getRawValue())
        .subscribe((value) => this.goBack());
      return;
    }

    this.service
      .edit(this.idVehicle, this.vehicleForm.getRawValue())
      .subscribe((value) => this.goBack());
  }

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  resetForm() {
    this.vehicleForm.controls['model'].setValue('');
    this.vehicleForm.controls['manufacturer'].setValue('');
    this.vehicleForm.controls['color'].setValue('');
    this.vehicleForm.controls['status'].setValue(null);

    if (this.idVehicle === '0') {
      this.vehicleForm.controls['plate'].setValue('');
    }
  }
}
