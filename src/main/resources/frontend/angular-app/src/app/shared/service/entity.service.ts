import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService<T> {

  private readonly URL: string = '/natural';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.URL);
  }

  public create(entity: T) {
    return this.http.post<number>(this.URL, entity);
  }

  public edit(entity: T) {
    return this.http.put<T>(this.URL + '/' + this.receiveId(entity), entity);
  }

  public delete(entity: T) {
    return this.http.delete<T>(this.URL + '/' + this.receiveId(entity));
  }

  private receiveId(entity: T){
    let identifier;
    identifier = entity['id'] ? entity['id'] : undefined;
    identifier = entity['accountNumber'] ? entity['accountNumber'] : undefined;
    identifier = entity['login'] ? entity['login'] : undefined;
    return identifier;
  }

}
