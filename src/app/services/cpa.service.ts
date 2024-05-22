import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Practitioner } from '../Interfaces/Practitioner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpaService {

  private baseUrl: string = "http://localhost:8080/api/v1/";

  constructor(private _http: HttpClient) { }

  getIndependentPractioner(): Observable<Practitioner[]> {

    const url = `${this.baseUrl}practitioners`;

    var response = this._http.get<Practitioner[]>(url);
    return response;
  }

  createCPA(request: Practitioner): Observable<Practitioner>{
    return this._http.post<Practitioner>(`${this.baseUrl}practitioners`, request);
  }
}
