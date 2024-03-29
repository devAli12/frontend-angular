import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model'; 


@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private apiUrl = 'http://localhost:8080/api'; 
  constructor(private http: HttpClient) {}

  getFomations(): Observable<Formation[]> {
    const url = `${this.apiUrl}/formations`;
    return this.http.get<Formation[]>(url);
  }
  getFomation(id:number): Observable<Formation> {
    const url = `${this.apiUrl}/formations/${id}`;
    return this.http.get<Formation>(url);
  }

  deleteFormation(id: number): Observable<any> {
    const url = `${this.apiUrl}/formations/${id}`; 
    return this.http.delete<any>(url);
  }

  createFormation(formation :Formation):Observable<any>{
    const url = `${this.apiUrl}/formations`;
    return this.http.post<any>(url,formation);
  }

  updateFormation(formation :Formation):Observable<any>{
    const url = `${this.apiUrl}/formations/${formation.id}`;
    return this.http.put<any>(url,formation);
  }


  deleteAll():Observable<any>{
    const url = `${this.apiUrl}/formations`;
    return this.http.delete<any>(url);
  }

  deleteSelected(ids:any[]):Observable<any>{
    const url = `${this.apiUrl}/formations/delete/${ids}`;
    return this.http.delete<any>(url);
  }



  search(textSearch:string):Observable<any>{
    const url = `${this.apiUrl}/formations/search?keyword=${textSearch}`;
    return this.http.get<any>(url);
  }


}
