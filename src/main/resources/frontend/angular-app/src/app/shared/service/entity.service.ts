import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntityService<T extends DbEntity<T>> {

  URL: string;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.URL).pipe(
      tap(x => {
        x.forEach(y => {
          y.fromRow();
        });
      })
    );
  }

  public create(entity: T) {
    return this.http.post<number>(this.URL, entity.toRow());
  }

  public edit(entity: T) {
    return this.http.put<T>(this.URL + '/' + this.receiveId(entity), entity.toRow());
  }

  public delete(entity: T) {
    return this.http.delete<T>(this.URL + '/' + this.receiveId(entity));
  }

  private receiveId(entity: T) {
    let identifier;
    identifier = entity['id'] ? entity['id'] : undefined;
    identifier = entity['accountNumber'] ? entity['accountNumber'] : undefined;
    identifier = entity['login'] ? entity['login'] : undefined;
    return identifier;
  }

}
