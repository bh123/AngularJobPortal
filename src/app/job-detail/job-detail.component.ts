import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job = new Job()
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('jobDetails') !== null && sessionStorage.getItem('jobDetails') !== undefined) {
      this.job = JSON.parse(sessionStorage.getItem('jobDetails'));
    }
  }

}
