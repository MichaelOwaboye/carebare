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

  getConstants(): Observable<ConstantResponse> {

    const url = `${this.baseUrl}carepassconstants`;

    var response = this._http.get<ConstantResponse>(url);
    return response;
  }

  createCPA(request: Practitioner): Observable<Practitioner> {
    return this._http.post<Practitioner>(`${this.baseUrl}practitioners`, request);
  }


  getCPAAgreements(): Observable<CPAAgreement[]> {
    return this._http.get<CPAAgreement[]>(`${this.baseUrl}cpagreements`);
  }


  createCPAAgreement(request: CPAAgreement): Observable<CPAAgreement> {
    return this._http.post<CPAAgreement>(`${this.baseUrl}cpagreements`, this.getRequest(request));
  }

  private getRequest(request: CPAAgreement) {
    
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();

    var expires = new Date(year + 1, month, day);
    
    request.effectiveDate = this.formatDate(today);    
    request.expiryDate = this.formatDate(expires);

console.log("today" + today);
    console.log(request);
    return request;
  }

  formatDate(date: Date): string {
    const pad = (number: number, length = 2) => number.toString().padStart(length, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    // const hours = pad(date.getHours());
    // const minutes = pad(date.getMinutes());
    // const seconds = pad(date.getSeconds());
    // const milliseconds = pad(date.getMilliseconds(), 3) + '000'; // Adding extra zeros for microseconds
    // ${hours}:${minutes}:${seconds}.${milliseconds}
    return `${year}-${month}-${day}`;
  }
}
