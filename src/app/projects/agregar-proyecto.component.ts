import { Component } from '@angular/core';
import { ProyectosService } from '../service/proyectos.service';
import { Proyectos } from '../models/proyectos';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent {

  urlimagen = '';
  nombre = '';
  urlproyecto = '';

constructor(
  private proyectosService: ProyectosService,
  private toastr: ToastrService,
  private router: Router
  ) { }

ngOnInit() {
}

onCreate(): void {
  const proyecto = new Proyectos(this.urlimagen, this.nombre, this.urlproyecto);
  this.proyectosService.save(proyecto).subscribe(
    data => {
      this.toastr.success('Proyecto Creado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.router.navigate(['/']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.router.navigate(['/']);
    }
  );
}

}

