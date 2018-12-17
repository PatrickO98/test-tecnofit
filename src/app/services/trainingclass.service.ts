import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TrainingClass } from '../entities/trainingclass';
import { TrainingClasses } from '../entities/training-classes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token, X-Requested-With, Accept-Version, Content-Length, Content-MDS, Data, X-Api-Version, X-File-Name'
  })
};

/*
httpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
httpContext.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
httpContext.Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name");
httpContext.Response.Headers.Add("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,DELETE,OPTIONS");
*/

@Injectable({
  providedIn: 'root'
})
export class TrainingClassService {

  constructor(
    private http: HttpClient
  ) { }

  //URL
  private apiUrl = 'http://testes.tecnofit.com.br/class/main';
  private pUrl = '/class/main/save';

  getClasses(): Observable<TrainingClasses> {
    return this.http.get<TrainingClasses>(this.apiUrl);
  }

  saveClass(trainingclass: TrainingClass): Observable<TrainingClass> {
    return this.http.put<TrainingClass>(this.pUrl, trainingclass, httpOptions);
  }

}
