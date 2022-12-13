import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public listaexp(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'listaexp');
  }

  public detailexp(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detailexp/${id}`);
  }

  public detailtituloexp(titulo: string): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `detailtituloexp/${titulo}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'createexp', experiencia);
  }


  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + `updateexp/${id}`, experiencia); 
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `deleteexp/${id}`);
  }

}
