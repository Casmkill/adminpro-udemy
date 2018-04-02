import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Hospital } from './../../models/hospital.model';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/service.index';
import swal from 'sweetalert2';



@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {

    this.cargarHospitales();

    this._modalUploadService.notificacion
    .subscribe( () => this.cargarHospitales ());
  }

  buscarHospital( termino: string) {

    if (termino.length <= 0 ) {
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital ( termino)
    .subscribe( hospitales => {
      this.hospitales = hospitales;
    });

  }

  cargarHospitales () {

    this._hospitalService.cargarHospitales()
    .subscribe( hospitales => {

      this.hospitales = hospitales;


    });

  }


  guardarHospital(hospital: Hospital) {

    this._hospitalService.actualizarHospital( hospital )
    .subscribe();

  }

  borrarHospital (hospital: Hospital) {

    swal({
      title: '¿Está seguro de elimiinar este hospital?',
      text: hospital.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true,
      allowOutsideClick: false
    }).then((borrar) => {
      if (borrar.value) {

        this._hospitalService.borrarHospital(hospital._id).subscribe( () => {

          this.cargarHospitales();

        });

      }


    });
  }


  crearHospital() {




    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Salir',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      allowOutsideClick: false
    }).then((valor: any) => {
      if (!valor.value || valor.value.length === 0) {
        return;
      }

      this._hospitalService.crearHospital(valor.value)
      .subscribe( () => {
        swal({
          type: 'success',
          title: 'Hospital creado',
          text: valor.value
        });

        this.cargarHospitales();
      });
    });

  }


  actualizarImagen( hospital: Hospital) {

    this._modalUploadService.mostrarModal('hospitales', hospital._id);

  }





}
