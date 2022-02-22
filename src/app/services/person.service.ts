import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Production} from "../model/Production";
import {Observable} from "rxjs";
import {ResponseRequest} from "../model/ResponseRequest";
import {Person} from "../model/Person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addPerson(person: Person): Observable<ResponseRequest> {
    return this.http.post<ResponseRequest>(`${this.apiServerUrl}/api/user/persons`, person);
  }

  public getPersons(id:number): Observable<ResponseRequest> {
    return this.http.get<ResponseRequest>(`${this.apiServerUrl}/api/user/production/`+id);
  }
}
