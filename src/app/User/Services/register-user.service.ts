import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

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

  registerUser(user: { password: string; surname: string; name: string; email: string }) {
    return this.http.post('http://localhost:8081/session/create/user',user,this.jsonOptions).pipe(
      catchError(this.handleError<any>('registerUser', {error: ''}))
    )
  }
}
