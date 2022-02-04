import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseRequest} from "../model/ResponseRequest";
import {Section} from "../model/Section";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addSection(section: Section): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/user/section`, section);
  }

  public getSections(): Observable<ResponseRequest> {
    return this.http.get<ResponseRequest>(`${this.apiServerUrl}/api/user/section`);
  }
}
