import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CPAAgreement, ConstantResponse, Frequence, Practitioner } from '../Interfaces/Practitioner';
import { Observable } from 'rxjs';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CpaService {

  private baseUrl: string = "http://localhost:8080/api/v1/";

  constructor(private _http: HttpClient) { }

  getIndependentPractitioner(): Observable<Practitioner[]> {

    const url = `${this.baseUrl}practitioners`;

    var response = this._http.get<Practitioner[]>(url);
    return response;
  }


  getAllDependentPractitioner(independentPractitionerId:number): Observable<Practitioner[]> {

    const url = `${this.baseUrl}practitioners?type=Dependent&independentPractitionerId=${independentPractitionerId}`;

    var response = this._http.get<Practitioner[]>(url);
    return response;
  }

  getFrequences(): Observable<ConstantResponse[]> {

    const url = `${this.baseUrl}carepassconstants`;

    var response = this._http.get<ConstantResponse[]>(url);
    return response;
  }

  createCPA(request: Practitioner): Observable<Practitioner> {
    return this._http.post<Practitioner>(`${this.baseUrl}practitioners`, request);
  }



  createCPAAgreement(request: CPAAgreement): Observable<CPAAgreement> {
    return this._http.post<CPAAgreement>(`${this.baseUrl}cpagreements`, this.getRequest(request));
  }

  private getRequest(request: CPAAgreement) {

    request.createdDate = new Date();
    request.effectiveDate = new Date();

    console.log(request);
    return request;
  }
}
