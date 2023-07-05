import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { productModel, createProductModelDTO, updateProductModelDTO } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShowProductService {
  readonly API_URL: string = 'https://api.escuelajs.co/api/v1/products';
  constructor(private HttpClient: HttpClient) { }
  // Recuperar todos los objetos
  getAll(): Observable<productModel[]> {
    const url = `${this.API_URL}`;
    return this.HttpClient.get<productModel[]>(url);
  }
  // Recuperar un objeto
  getOne(id: productModel['id']): Observable<productModel> {
    const url = `${this.API_URL}/${id}`;
    return this.HttpClient.get<productModel>(url);
  }
  // Crear un nuevo producto
  store(product: createProductModelDTO): Observable<productModel> {
    const url = `${this.API_URL}`;
    return this.HttpClient.post<productModel>(url, product);
  }
  // Actualizar 
  update(id: productModel['id'], product: updateProductModelDTO): Observable<productModel> {
    const url = `${this.API_URL}/${id}`;
    return this.HttpClient.put<productModel>(url, product);
  }
  // Eliminar
  // metodo map mapea cómo queremos la respuesta
  destroy(id: productModel['id']): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.HttpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
      return response.rta;
    }));
  }
}
