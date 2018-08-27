import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private http: HttpClient
  ) { }

  private dataTableUrl :string  // URL to web api
 
  /** GET table data from the server */
  getData (): Observable<any[]> {
    return this.http.get<any[]>(this.dataTableUrl)
    .pipe(
      tap(_ => console.log(`fetched Table Data`)),
      catchError(this.handleError('getTableData', []))
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
