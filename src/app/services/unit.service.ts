import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UnitModel } from '../models/unit-model';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { TaskDetailModel } from '../models/task-detail-model';
import { QuestionDetailsModel } from '../models/question-details-model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  endpoint = 'https://74eirokys9.execute-api.eu-central-1.amazonaws.com/development/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '1'
    })
  };

  constructor(private http: HttpClient) {}


  public getUnits(): Observable<UnitModel[]> {
    return this.http
      .get<UnitModel[]>(this.endpoint + 'unit', this.httpOptions);
  }

  public getTaskDetails(id: number): Observable<TaskDetailModel> {
    return this.http
      .get<TaskDetailModel>(this.endpoint + 'task/' + id, this.httpOptions);
  }

  public getQuestion(id: number): Observable<QuestionDetailsModel> {
    return this.http
      .get<QuestionDetailsModel>(this.endpoint + 'question/' + id, this.httpOptions);
  }

  public submitAnswer(body: {answerType: string, answerId: number, questionId: number}): Observable<any> {
    return this.http.post<any>(`${this.endpoint}answer`, this.httpOptions);
  }

}
