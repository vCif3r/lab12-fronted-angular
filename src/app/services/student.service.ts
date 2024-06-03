import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../intranet/student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string = 'http://localhost:3000/api/students'
  constructor(private _http: HttpClient) { }

  getProfile(_id: any): Observable<Student>{
    return this._http.get<Student>(`${this.url}/profile/${_id}`)
  }
}
