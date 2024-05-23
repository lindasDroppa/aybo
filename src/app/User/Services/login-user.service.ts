import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable()
export class LoginUserService {

  constructor(private http:HttpClient) { }

  jsonOptions = {
    headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(error as T);
    };
  }

  public loginClient(clientDetails:any){
    return  this.http.post('http://localhost:8081/api/v1/service/session/login',clientDetails,this.jsonOptions).pipe(
      catchError(this.handleError<any>('loginClient', {error: ''}))
    );
  }
}
