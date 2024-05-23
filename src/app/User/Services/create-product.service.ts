import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  constructor(private http:HttpClient)
  { }

  jsonOptions = {
    headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(error as T);
    };
  }

  getAllProduct() {
    return this.http.get("http://localhost:8081/session/all/product",this.jsonOptions).pipe(
      catchError(this.handleError<any>('loginClient', {error: ''}))
    );
  }

  createProduct(product:any){
    return this.http.post("http://localhost:8081/product/create",product,this.jsonOptions).pipe(
      catchError(this.handleError<any>('getAllProduct', {error: ''}))
    )
  }
}
