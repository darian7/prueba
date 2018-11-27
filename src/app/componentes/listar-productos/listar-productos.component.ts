import { Component, OnInit, Input,Output } from '@angular/core';
import { animacion } from 'src/app/Animaciones/AnimacionDefault';
import { productos } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
  animations: [animacion]
})
export class ListarProductosComponent implements OnInit {

  @Input()dato:productos
  @Input()dato2:number
  constructor() { }

  ngOnInit() {
  }

}



