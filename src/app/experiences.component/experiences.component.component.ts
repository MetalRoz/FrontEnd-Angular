import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiences-component',
  templateUrl: './experiences.component.component.html',
  styleUrls: ['./experiences.component.component.css']
})
export class ExperiencesComponentComponent implements OnInit {

  experiencias: Experiencia[] = [];
  Experiencia: any;
  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.experienciaService.listaexp().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienciaService.delete(id).subscribe(
      data => {
        this.toastr.success('Experiencia Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarExperiencia();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
