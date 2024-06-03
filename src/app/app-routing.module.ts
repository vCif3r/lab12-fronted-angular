import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './public/auth/login/login.component';
import { RegisterComponent } from './public/auth/register/register.component';
import { IntranetComponent } from './intranet/intranet.component';
import { AuthGuard } from './guards/auth.guard';
import { StudentComponent } from './intranet/student/student.component';
import { ProfileComponent } from './intranet/student/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent, title: 'home'},
      {path: 'login', component: LoginComponent, title: 'login'},
      {path: 'register', component: RegisterComponent, title: 'register'}
    ]
  },
  {
    path: 'intranet',
    component: IntranetComponent,
    children: [
      {
        path: 'student',
        component: StudentComponent,
        canActivate: [AuthGuard],
        data: {expectedRole: "student"},
        children: [
          {
            path: 'profile/:id',
            component: ProfileComponent,
            title: 'perfil'
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
