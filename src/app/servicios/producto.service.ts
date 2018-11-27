import { Injectable } from '@angular/core';
import { productos } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  Productos: Array<productos> = [
    {
      Nombre: "Arroz",
      Precio: 1000,
      Cantidad: 5,
      Detalle: "Arroz diana muy economico"
    },
    {
      Nombre: "Papa",
      Precio: 3000,
      Cantidad: 3,
      Detalle: "Papa pelada muy economico"
    },
    {
      Nombre: "Yuca",
      Precio: 5000,
      Cantidad: 5,
      Detalle: "Yuca economico para cocsinar"
    },
    {  
      Nombre: "espaguetis",
      Precio: 9000,
      Cantidad: 2,
      Detalle: "lentejas frescas y lavadas"
    }
  ];

  validar :Boolean=true;



ObteneterProductos () {
  return this.Productos;
}

ObteneterUnProducto (index) :productos {
  return this.Productos[index];
}

CrearProducto (producto:productos){
  this.Productos.push(producto);
}


}
