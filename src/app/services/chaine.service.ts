import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {User} from "../model/User";
import {Chaine} from "../model/Chaine";
import {ResponseRequest} from "../model/ResponseRequest";

@Injectable({
  providedIn: 'root'
})
export class ChaineService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addChaine(chaine: Chaine): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/user/chaine`, chaine);
  }

  public getChaines(): Observable<ResponseRequest> {
    return this.http.get<ResponseRequest>(`${this.apiServerUrl}/api/user/chaine`);
  }
}
