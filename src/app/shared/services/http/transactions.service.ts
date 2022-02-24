import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private endpoint = `${environment.apiUrl}/transactions`

  constructor(private http: HttpClient) { }

  getLatestTransactions(count: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.endpoint}/latest/${count}`)
      .pipe(
        tap(
          data => data,
          error => console.log(error)
        )
      )
  }

}
