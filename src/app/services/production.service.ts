import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Chaine} from "../model/Chaine";
import {Observable} from "rxjs";
import {ResponseRequest} from "../model/ResponseRequest";
import {Production} from "../model/Production";

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addProduction(production: Production): Observable<ResponseRequest> {
    return this.http.post<ResponseRequest>(`${this.apiServerUrl}/api/user/production`, production);
  }

  public getProductions(): Observable<ResponseRequest> {
    return this.http.get<ResponseRequest>(`${this.apiServerUrl}/api/user/production`);
  }
}
