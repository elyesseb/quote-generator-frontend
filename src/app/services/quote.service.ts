import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<Quote> {
    return this.http.get(`${baseUrl}/quotes`);
  }

  get(username: any): Observable<Quote> {
    return this.http.get(`${baseUrl}/users/${username}`);
  }

  getById(id: any): Observable<Quote> {
    return this.http.get(`${baseUrl}/quotes/${id}`);
  }

  create(username: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/quotes/${username}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/quotes/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/quotes/${id}`);
  }

}
