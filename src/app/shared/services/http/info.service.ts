import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { InfoSummaryHttp } from '../../models/info-summary';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private endpoint = `${environment.apiUrl}/info`

  constructor(private http: HttpClient) { }

  getSummary(): Observable<InfoSummaryHttp> {
    return this.http.get<InfoSummaryHttp>(`${this.endpoint}/summary`)
      .pipe(
        tap(
          data => data,
          error => console.log(error)
        )
      )
  }
}
