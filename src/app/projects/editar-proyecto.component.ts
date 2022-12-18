import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent {

  project: Proyectos = null;

  constructor(
    
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.detailpro(id).subscribe(
      data => {
        this.project = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.update(id, this.project).subscribe(
      data => {
        this.toastr.success('Proyecto actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}

