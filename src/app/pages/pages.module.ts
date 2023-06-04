import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { SalidaProductosComponent } from './salida-productos/salida-productos.component';
import { ComprasComponent } from './compras/compras.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [
        DashboardComponent,
        CategoryComponent,
        ProductComponent,
        PagesComponent,
        NotFoundComponent,
        ProveedoresComponent,
        SalidaProductosComponent,
        ComprasComponent,
    ],
    exports: [
        DashboardComponent,
        CategoryComponent,
        ProductComponent,
        PagesComponent,
        NotFoundComponent,
        ProveedoresComponent,
        SalidaProductosComponent,
        ComprasComponent,
        SharedModule,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        AppRoutingModule
    ]
})
export class PagesModule { }
