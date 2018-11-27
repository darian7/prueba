import { Component, OnInit} from '@angular/core';
import { animacion } from 'src/app/Animaciones/AnimacionDefault';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [ animacion]
})
export class InicioComponent implements OnInit {

  constructor() { 
    console.log("corriendo el inicio");
    
  }

  ngOnInit() {
  }

}
