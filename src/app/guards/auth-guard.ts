import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { InsertarProductosComponent } from '../componentes/insertar-productos/insertar-productos.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanDeactivate<InsertarProductosComponent> {

  canDeactivate(component: InsertarProductosComponent): boolean {

    if (component.haycambios()) {
      return confirm('Hay datos en el formulario por guardar');
    }
    return true;


  }

}
