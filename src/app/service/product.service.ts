import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.serviceUrl}/product`;
  constructor(private http : HttpClient) { }

  getProduct() : any{
    return this.http.get<any>(this.url);
  }

  getProductById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }


  getProductByName(name: any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }

  addProduct(sales: any){
    let getUrl = `${this.url}/`;
    return this.http.post<any>(getUrl,sales)
    .pipe(map((res)=>{
      return res;
    }));
  }

  editProduct(sales: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,sales)
    .pipe(map((res)=>{
      return res;
    }));
  }

  deleteProduct(_id: any){
    let getUrl = `${this.url}/items/${_id}`;
    return this.http.delete<any>(getUrl);
  }
}
