import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { IntranetComponent } from './intranet/intranet.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './public/auth/login/login.component';
import { RegisterComponent } from './public/auth/register/register.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StudentComponent } from './intranet/student/student.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileComponent } from './intranet/student/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    IntranetComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,CommonModule, ReactiveFormsModule,HttpClientModule,
    MatButtonModule,MatSidenavModule,MatListModule,MatIconModule,MatToolbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }