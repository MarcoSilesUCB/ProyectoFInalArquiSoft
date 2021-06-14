import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sale } from '../models/sale.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  saleUrl: string = "http://localhost:5000/api/salesitems";
  constructor(private http:HttpClient) { }

  getSales(): Observable<Sale[]>{
    return this.http.get<Sale[]>(this.saleUrl);
  }

  deleteSale(sale:Sale): Observable<Sale>{
    return this.http.delete<Sale>(this.saleUrl+ `/${sale.idSale}`);
  }

  getSale(idSale:string): Observable<Sale>{
    return this.http.get<Sale>(`${this.saleUrl}/${idSale}`);
  }

  createSale(saleToCreate:Sale):Observable<Sale>{
    return this.http.post<any>(this.saleUrl, saleToCreate, httpOptions);
  }

  updateDealer(saleToUpdate:Sale):Observable<any>{
    return this.http.put(`${this.saleUrl}/${saleToUpdate.idSale}`, saleToUpdate, httpOptions);
  }
}
