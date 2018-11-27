import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';
import { InsertarProductosComponent } from './componentes/insertar-productos/insertar-productos.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ProductoService } from './servicios/producto.service';
import { FormsModule } from '@angular/forms';
import { ContenidoInicioComponent } from './componentes/contenido-inicio/contenido-inicio.component';
import { NumerosDirective } from './directivas/numeros.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    ListarProductosComponent,
    InsertarProductosComponent,
    DetalleProductoComponent,
    ContenidoInicioComponent,
    NumerosDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
