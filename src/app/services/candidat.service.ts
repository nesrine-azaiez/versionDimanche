import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidat} from '../core/model/candidat';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  getURL = 'http://localhost:8080/GetCandidacy';
  addcUrl = 'http://localhost:8080/addCandidacy/';
  constructor(private http: HttpClient) { }
  getCandidacy(): Observable<Candidat[]>{
    return this.http.get<Candidat[]>(this.getURL);
  }
  SerachMultiple(key: string): Observable<Candidat[]>
  {
    return this.http.get<Candidat[]>('http://localhost:8080/SearchMultiple/' + key);
  }

  addCandidacy(candidat: Candidat, idU: number ): Observable<Candidat>{
    return this.http.post<Candidat>(this.addcUrl + idU, candidat);
  }


  updateCandidacy(can: Candidat, idC: number): Observable<any>
  {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(can);
    console.log(body);
    return this.http.put<Candidat>
    ('http://localhost:8080/updateCandidacy/' + idC, can);
  }
}
