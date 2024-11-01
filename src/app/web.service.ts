// Vasilina Khvostikova
// 2024-10-28
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// web.service
@Injectable({
  providedIn: 'root'
})
export class WebService {
  private jsonUrl = '/program-languages.json';

  constructor(private http: HttpClient) {}

  loadLanguagesData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
