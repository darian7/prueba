import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarProductosComponent } from './componentes/insertar-productos/insertar-productos.component'
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'InsertarProductos', component: InsertarProductosComponent, canDeactivate: [AuthGuard] },
  { path: 'Productos/:id', component: DetalleProductoComponent },
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes, { enableTracing: true }),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
