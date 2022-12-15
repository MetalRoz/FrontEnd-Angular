import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Education } from '../models/education';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-editar-education',
  templateUrl: './editar-education.component.html',
  styleUrls: ['./editar-education.component.css']
})
export class EditarEducationComponent {

  titulo: Education = null;

  constructor(
    
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detailedu(id).subscribe(
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
    this.educationService.update(id, this.titulo).subscribe(
      data => {
        this.toastr.success('Educación actualizada', 'OK', {
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


