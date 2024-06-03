import { Component } from '@angular/core';

export interface Menu{
  url: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarMenu : Menu[] = [
    {
      url: '/nosotros',
      label: 'Nosotros',
    },
    {
      url: '/contacto',
      label: 'Contacto',
    },
    {
      url: '/servicios',
      label: 'Servicios',
    },
    {
      url: '/empresas',
      label: 'Empresas',
    }
  ]
}
