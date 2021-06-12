import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './pages/vehicle-form/vehicle-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleFormComponent,
    NavBarComponent,
    MenuOptionComponent,
    CustomInputComponent,
    ButtonComponent,
    ButtonLinkComponent
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
