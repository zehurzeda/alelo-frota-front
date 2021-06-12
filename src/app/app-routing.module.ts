import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleFormComponent } from './pages/vehicle-form/vehicle-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full'},
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/:id', component: VehicleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
