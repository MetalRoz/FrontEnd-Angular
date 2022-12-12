import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Aboutme } from '../models/aboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  aboutmeURL = 'http://localhost:8080/aboutme/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Aboutme[]> {
    return this.httpClient.get<Aboutme[]>(this.aboutmeURL + 'lista');
  }

  public update(id: number, aboutme: Aboutme): Observable<any> {
    return this.httpClient.put<any>(this.aboutmeURL + `update/${id}`, aboutme); 
  }
}
