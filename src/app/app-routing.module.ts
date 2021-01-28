import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  { path: ':job', component: JobsComponent },
  { path: '', pathMatch: 'full',  component: JobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
