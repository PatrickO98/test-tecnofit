import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TrainingClass } from '../entities/trainingclass';
import { TrainingClasses } from '../entities/training-classes';

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

  getClasses(): Observable<TrainingClasses> {
    return this.http.get<TrainingClasses>(this.apiUrl);
  }

  saveClass(trainingclass: TrainingClass): Observable<TrainingClass> {
    return this.http.put<TrainingClass>(this.apiUrl+'/save', trainingclass, httpOptions);
  }

}
