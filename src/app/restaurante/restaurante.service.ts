import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Restaurante } from './restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private apiUrl: string = environment.baseUrl + 'restaurantes';

  constructor(private http: HttpClient) { }

  getRestaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.apiUrl);
  }
}
