import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { Job } from '../model/job';
import { JobServiceService } from '../job-service.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
   
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

  JobDetail(job: Job): void {
    this.router.navigate(['jobDetail']);
    sessionStorage.setItem('jobDetails', JSON.stringify(job))
  }
}


