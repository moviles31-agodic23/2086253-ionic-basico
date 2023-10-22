import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { AgregarTarjetaComponent } from '../agregar-tarjeta/agregar-tarjeta.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TarjetasComponent, AgregarTarjetaComponent]
})
export class HomePageModule {}
