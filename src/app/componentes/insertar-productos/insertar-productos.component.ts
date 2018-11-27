import { Component, OnInit, ViewChild } from '@angular/core';
import { animacion } from 'src/app/Animaciones/AnimacionDefault';
import { ProductoService } from 'src/app/servicios/producto.service';
import { productos } from 'src/app/interfaces/producto';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-insertar-productos',
  templateUrl: './insertar-productos.component.html',
  styleUrls: ['./insertar-productos.component.css'],
  animations: [animacion]
})
export class InsertarProductosComponent implements OnInit {


  constructor(private servicio: ProductoService) { }

  Productos: Array<productos>;
  Guardia: Boolean = false;
  MostrarPrecio: Boolean;
  MostrarCantidad: Boolean;
  MostrarNombre:Boolean;
  nombreLetras:string;
  
  


  ngOnInit() {
    this.MostrarProductos();
  }

  haycambios(): boolean {
    if (this.Guardia) {
      return true;
    }
    return false;
  }

  Verificar(nombre: string, precio: string, cantidad: string, detalle: string) {
    if (nombre == "" && precio == "" && cantidad == "" && detalle == "") {
      this.Guardia = false;
    } else {
      this.Guardia = true;
    }
    if (/^([a-ñ])*$/.test(this.nombreLetras)){
      this.MostrarNombre=false;
    }else{
      this.MostrarNombre=true;
    }
    
  }

  MostrarProductos() {
    this.Productos = this.servicio.ObteneterProductos();
  }

  CrearProducto(nombre, precio, cantidad, detalle) {
    var Producto: productos = {
      Nombre: nombre.value,
      Precio: precio.value,
      Cantidad: cantidad.value,
      Detalle: detalle.value
    };
    this.servicio.CrearProducto(Producto);

   
    this.Guardia=false;
  }


  VerificarNumerosPrecio(event) {
    console.log(event)
    this.MostrarPrecio = event;
  }

  VerificarNumerosCantidad(event) {
    console.log(event)
    this.MostrarCantidad = event;
  }

}

