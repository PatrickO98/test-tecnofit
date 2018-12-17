import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TrainingClass } from '../entities/trainingclass';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TrainingClassService {

  constructor(
    private http: HttpClient
  ) { }

  //URL
  private apiUrl = 'http://testes.tecnofit.com.br/class/main';

  getClasses(): Observable<TrainingClass[]> {
    return this.http.get<TrainingClass[]>(this.apiUrl);
  }

  saveClass(trainingclass: TrainingClass): Observable<TrainingClass> {
    return this.http.post<TrainingClass>(this.apiUrl+'/save', trainingclass, httpOptions);
  }

}
