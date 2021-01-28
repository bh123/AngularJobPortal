import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobServiceService } from './job-service.service';
import { Job } from './model/job';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ngOnInit(): void {
  }
  title = 'JobPortal';
  jobList: Job[] = [];

  constructor(private router: Router, private jobServiceService: JobServiceService) { }

  SearchJob(exp: number, technology: number, City: number): void {
    this.getJoblist(exp, technology, City);
  }

  getJoblist(exp: number, technology: number, City: number) {

    this.jobServiceService.getJobList(exp, technology, City).subscribe(data => {
      this.jobList = data;

    });
  }

}
