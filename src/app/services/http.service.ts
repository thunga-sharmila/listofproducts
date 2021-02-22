import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  appUrl:string = "http://localhost:3000/";

  constructor(
    private http: HttpClient,
  ) { }

  get(url): Observable<any> {
    const headers = this.getHttpHeader();
    return this.http.get(this.appUrl + url, { headers: headers });
  }

  //get Http Header
  getHttpHeader() {
    let headers = new HttpHeaders().set('Authorization', "");
    return headers;
}
}
