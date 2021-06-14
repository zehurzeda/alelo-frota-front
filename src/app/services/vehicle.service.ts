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
