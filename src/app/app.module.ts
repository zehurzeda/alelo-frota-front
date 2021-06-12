import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './pages/vehicle-form/vehicle-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleFormComponent,
    NavBarComponent,
    MenuOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
