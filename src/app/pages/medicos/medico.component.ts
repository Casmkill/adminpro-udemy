import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Medico } from './../../models/medico.model';
import { Hospital } from './../../models/hospital.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MedicoService, HospitalService } from '../../services/service.index';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

hospitales: Hospital[] = [];
medico: Medico = new Medico('', '', '', '');
hospital: Hospital = new Hospital('');

  constructor(
    public _medicoService: MedicoService,
    public _hospitalService: HospitalService,
    public router: Router,
    public activatedRouted: ActivatedRoute,
    public _modalUploadService: ModalUploadService
  ) {

    activatedRouted.params.subscribe( params => {

      let id = params['id'];

      if( id !== 'nuevo') {
        this.cargarMedico( id);
      }
    });
  }

  ngOnInit() {

    this._hospitalService.cargarHospitales()
    .subscribe( hospitales => this.hospitales = hospitales );

    this._modalUploadService.notificacion.subscribe( resp => {

      this.medico.img = resp.medico.img;
      console.log(resp);
    });
  }

  cargarMedico( id: string) {

  this._medicoService.cargarMedico( id)
  .subscribe( (medico: any) => {
    this.medico = medico;
    this.medico.hospital = medico.hospital._id;
    this.cambiarHospital( this.medico.hospital );
  } );

 }
  guardarMedico( f: NgForm) {
    console.log(f.valid);
    console.log(f.value);

    if (f.invalid ) {
      return;
    }

    this._medicoService.guardarMedico(this.medico)
    .subscribe( medico => {
      this.medico._id = medico;
      this.router.navigate(['/medico', medico._id]);
    });
  }


  cambiarHospital  (id: string) {

    this._hospitalService.obtenerHospital(id)
    .subscribe( hospital => this.hospital = hospital);

  }

  cambiarFoto() {

    this._modalUploadService.mostrarModal('medicos', this.medico._id);

  }


}
