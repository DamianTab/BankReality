import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NaturalPerson } from '../model/natural-person';

@Injectable({
  providedIn: 'root'
})
export class NaturalPersonService {

  private readonly URL: string = '/natural';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<NaturalPerson[]> {
    return this.http.get<NaturalPerson[]>(this.URL);
  }

  public create(person: NaturalPerson) {
    return this.http.post<number>(this.URL, person);
  }

  public edit(person: NaturalPerson) {
    return this.http.put<NaturalPerson>(this.URL + '/' + person.login, person);
  }

  public delete(id: number) {
    return this.http.delete<NaturalPerson>(this.URL + '/' + id);
  }

  //todo get one
}
