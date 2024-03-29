import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model'; 
import { Adherent } from '../models/Adherent.model';


@Injectable({
  providedIn: 'root',
})

export class AdhrentService{
    private apiUrl = 'http://localhost:8080/api/adherents'; 
    constructor(private http: HttpClient) {}

    getAdhrentsByFormation(idFormation:number):Observable<any>{
        const url = `${this.apiUrl}/formation?id=${idFormation}`;
        return this.http.get(url);
    }

    addAdherentToFormation(idFormation:number,adherent:Adherent):Observable<any>{
        const url=`${this.apiUrl}?formationId=${idFormation}`
        return this.http.post(url,adherent);
    }


    deleteAdherentFromFormation(adherentId:number){
       const url=`${this.apiUrl}/${adherentId}`
       return this.http.delete(url);
    }

    updateAdherent(adhrent:any,id:number):Observable<any>{
        const url = `${this.apiUrl}/${id}`;
        return this.http.put(url,adhrent);
    }
 
}