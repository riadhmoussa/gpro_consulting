import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public Register(user: User): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/auth/registration`, user);
  }
  public LoginIn(user: User): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/auth/signin`, user);
  }
}
