import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string = '';
  precio: number = 0;
  total: number = 0;
  lista: { nombre: string, precio: number }[] = [];

  agregarArticulo() {
    if (this.nombre && this.precio) {
      this.lista.push({ nombre: this.nombre, precio: this.precio });
      this.total += this.precio;
      this.nombre = '';
      this.precio = 0;
    }
  }

}