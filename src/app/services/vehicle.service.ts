import { Vehicle } from './../model/vehicle.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Pageable, PageableContainer } from '../model/pageable-response.model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  vehicleUrl: string = `${apiUrl}/vehicle`;

  constructor(private http: HttpClient) {}

  public listAllVehicles(
    page: Pageable,
    plate?: string
  ): Observable<PageableContainer<Vehicle>> {
    return this.http.get<PageableContainer<Vehicle>>(this.vehicleUrl, {
      params: this.getHttpParams(page, plate),
    });
  }

  public deleteVehicle(idVehicle: number): Observable<boolean> {
    const url = `${this.vehicleUrl}/${idVehicle}`
    return this.http.delete<any>(url);
  }

  public findById(idVehicle: string): Observable<Vehicle> {
    const url = `${this.vehicleUrl}/${idVehicle}`;
    return this.http.get<Vehicle>(url);
  }

  public save(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.vehicleUrl, vehicle);
  }

  public edit(idVehicle: string, vehicle: Vehicle): Observable<Vehicle> {
    const url = `${this.vehicleUrl}/${idVehicle}`;
    return this.http.put<Vehicle>(url, vehicle);
  }

  private getHttpParams(page: Pageable, plate?: string) {
    let params = new HttpParams()
    .append('page', `${page.pageNumber ? page.pageNumber - 1 : 0}`)
    .append('size', `${page.pageSize}`);
    
    if(plate) {
      params = params.append('plate', plate);
    }

    return params;
  }
}
