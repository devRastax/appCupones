import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router) { }
  goToInicio() {
    // Aquí puedes agregar el código para redirigir al inicio
    this.router.navigate(['/login']); // Reemplaza '/inicio' con la ruta correspondiente a tu página de inicio
  }

  ngOnInit() {
  }

}
