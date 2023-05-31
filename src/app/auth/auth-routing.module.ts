import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/app/pages/category/category.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { ProveedoresComponent } from '../pages/proveedores/proveedores.component';
import { ComprasComponent } from '../pages/compras/compras.component';
import { SalidaProductosComponent } from '../pages/salida-productos/salida-productos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'proveedor', component: ProveedoresComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'salidaProductos', component: SalidaProductosComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
