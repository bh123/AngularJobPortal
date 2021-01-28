import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './model/job';


@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private http: HttpClient) { }


  getJobList(exp: number, technology: number, City: number): Observable<Job[]> {
   
    const baseUrl = 'http://data.angular-jobs.in/api/jobs?CityId=2&SkillId=1&ExpYear=1';

    const params = {
      exp: exp.toString(),
      technology: technology.toString(),
      City: City.toString()
    }
    

    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.get<Job[]>(baseUrl,{params});
  }


}
