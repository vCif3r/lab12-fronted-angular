import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '../../services/auth.service';

export interface Student{
  _id: string;
  avatar: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  idUser: any;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
  );
  constructor(private breakpointObserver: BreakpointObserver,
    private auth: AuthService
  ) {}

  student?: Student;

  ngOnInit(): void {
    this.idUser = this.auth.getCurrentUser()._id
    console.log(this.idUser)
  }

  logout(): void {
    this.auth.logoutUser();
  }

  menu:any[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
    },
    {
      icon: 'books',
      label: 'Cursos'
    },
    {
      icon: 'folder',
      label: 'Notas'
    },
    {
      icon: 'group',
      label: 'Grupos'
    },
    {
      icon: 'help',
      label: 'Ayuda'
    }
  ];
}
