import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
// import { CommonServiceService } from '../common-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
    
    @Input() baseUrl: string;
    @Input() url: string;
    @Input() params: string[];
    @Input() modelName: string;
    @Output() displayInParent: EventEmitter<string> = new EventEmitter<string>();
    
    data: object;
    headers: string[];
    fields: object[];
    votes: number=0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.headers = data.headers;
      this.fields = data.dataList;
    });
    this.displayInParent.emit('I am in ngOnInit of child component');
  }
 
  /** GET table data from the server */
  getData (): Observable<any> {
    let fetchTableUrl: string = this.baseUrl +'/'+ this.url;
    return this.http.get<any>(fetchTableUrl)
    .pipe(
      tap(_ => console.log(`fetched Table Data`)),
      catchError(this.handleError('getTableData', []))
    );
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // upvote
  upvote(){
    this.votes++;
  }

  downvote(){
    this.votes--;
  }

  onClick() {
    this.displayInParent.emit(' a Click event from child component');
  }

}
