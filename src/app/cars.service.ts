import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  private CarsUrl = 'api/cars';  // URL to web api

  /** GET Cars from the server */
  getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(this.CarsUrl)
    .pipe(
      tap(_ => console.log(`fetched Cars`)),
      catchError(this.handleError('getCars', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
