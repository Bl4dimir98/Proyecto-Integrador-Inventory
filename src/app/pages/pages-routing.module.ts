import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable, Type } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CategoryComponent } from 'src/app/pages/category/category.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ComprasComponent } from './compras/compras.component';
import { SalidaProductosComponent } from './salida-productos/salida-productos.component';

const routes: Routes = [
  // rutas protegidas
  {path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'proveedor', component: ProveedoresComponent },
      { path: 'compra', component: ComprasComponent },
      { path: 'salidaProductos', component: SalidaProductosComponent },
      { path: '', redirectTo: '/dashboard/', pathMatch: 'full' },
      // { path: '**', component: NotFoundComponent },
    ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
