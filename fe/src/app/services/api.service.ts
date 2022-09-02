import { Slide } from './../models/slide';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAllSlides(): Observable<ReadonlyArray<Slide>> {
    return this.http.get('http://localhost:3000/api/slides', {params: {ms: 2000}}) as Observable<ReadonlyArray<Slide>>;
  }
}
