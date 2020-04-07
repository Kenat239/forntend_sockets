import { Component, OnInit } from '@angular/core';
import { ModalPersonalService } from './modal-personal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-personal',
  templateUrl: './modal-personal.component.html',
  styleUrls: ['./modal-personal.component.scss']
})
export class ModalPersonalComponent implements OnInit {

  personaNueva: FormGroup;

  constructor(
    public _mpersonalService: ModalPersonalService
  ) { }

  ngOnInit() {
    this._mpersonalService.nmp.subscribe( (resp: any) => {
      switch ( resp ) {
        case 'cancelar': {
          this.personaNueva.reset();
          break;
        }
      }
    });

    this.personaNueva = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidoP: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidoM: new FormControl('', [Validators.required, Validators.minLength(3)]),
      celular: new FormControl('', [Validators.required, Validators.minLength(10)]),
      tCasa: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

}
