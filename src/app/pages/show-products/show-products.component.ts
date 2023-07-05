import { Component, OnInit } from '@angular/core';
import { ShowProductService } from 'src/app/services/show-product.service';
import { productModel, updateProductModelDTO, createProductModelDTO } from 'src/app/models/product.model';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: productModel[] = [];
  selectedProduct: updateProductModelDTO = {};
  // Inyeccion de dependencias, similar a instanciar un objeto
  constructor(private showProductService: ShowProductService) {
    // this.editProduct();
    this.initProduct();
  }
  // Método ngOnInit similar al constructur, se ejcuta después del constructor
  ngOnInit(): void {
    this.getProducts();
    // this.getProduct();
    // this.createProduct();
    // this.updateProduct();
    // this.deleteProduct();
  }
  //Método initProduct
  initProduct() {
    this.selectedProduct = { title: '', price: 0, description: '' };
  }
  // Obtener todos los objetos
  getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    this.showProductService.getAll().subscribe(
      response => {
        this.products = response;
        console.log(response);
      });
  }
  // Obtener un objeto
  getProduct(id: number) {
    this.showProductService.getOne(id).subscribe(
      response => {
        console.log(response);
      });
  }
  // Crear product
  createProduct(product: createProductModelDTO) {
    this.showProductService.store(product).subscribe(
      response => {
        console.log(response);
      });
  }
  // Actualizar product
  updateProduct(id: productModel['id'], product: updateProductModelDTO) {
    this.showProductService.update(id, product).subscribe(
      response => {
        console.log(response);
      });
  }
  // Editar objeto
  editProduct(product: productModel) {
    this.selectedProduct = product;
  }
  // Eliminar objeto
  deleteProduct(id: productModel['id']) {
    this.showProductService.destroy(id).subscribe(
      response => {
        this.products = this.products.filter(product => product.id != id);
        console.log(response);
      });
  }


}
