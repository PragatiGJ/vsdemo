import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PnrComponent } from './pnr/pnr.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PicUploadComponent } from './pic-upload/pic-upload.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path : 'dashboard', component: DashboardComponent },
  {path : 'login', component: LoginComponent },
  {path : 'register', component: RegistrationComponent },
  {path : 'pic-upload', component: PicUploadComponent },
  {path : 'view-profile', component: ViewProfileComponent }
  //{​​​​ path: "dashboard/pic-upload", component: PicUploadComponent }​​​​,
]

@NgModule({
  declarations: [
    AppComponent,
    PnrComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    PicUploadComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
