import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
declare var $: any;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobDetailComponent,
    FooterComponent,
    HeaderComponent,
    JobsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
