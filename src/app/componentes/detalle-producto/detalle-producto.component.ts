import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service'
import { animacion } from 'src/app/Animaciones/AnimacionDefault';
import { productos } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  animations: [animacion]
})
export class DetalleProductoComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    private servicio: ProductoService
  ) {

    this.ruta.params.subscribe(params => {

      console.log(params['id'] + " esta es la ruta")
      this.producto = this.servicio.ObteneterUnProducto(params['id']);

    })

  }

  producto: productos;

  ngOnInit() {

  }

}
