import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../components/perfil/perfil.service';
import { ModalPersonalService } from '../../components/modal-personal/modal-personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    public _perfilService: PerfilService,
    public _mpService: ModalPersonalService
  ) { }

  ngOnInit() {
  }

}
