import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmiEstimateService {

  private readonly URL = '/credit/emi';

  constructor(private http: HttpClient) { }

  public estimateEmi(value: number, interest: number, time: number): Observable<number> {
  const params = new HttpParams()
    .set('amount', value.toString())
    .set('interest', interest.toString())
    .set('time', time.toString());
  return this.http.get<number>(this.URL, {params});
  }
}
