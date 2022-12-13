import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent {

  titulo: Experiencia = null;

  constructor(
    
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detailexp(id).subscribe(
      data => {
        this.titulo = data;
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
    this.experienciaService.update(id, this.titulo).subscribe(
      data => {
        this.toastr.success('Información actualizada', 'OK', {
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

