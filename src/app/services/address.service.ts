import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.apiUrl}`);
  }

  getAddress(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/${id}`);
  }

  saveAddress(address: Object): Observable<Object>{
    return this.http.post(`${environment.apiUrl}`, address);
  }

  deleteAddress(id: string): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/${id}`, {responseType: 'text'});
  }

  updateAdress(id: string, address: any): Observable<any>{
    return this.http.put(`${environment.apiUrl}/${id}`, address);
  }

}
