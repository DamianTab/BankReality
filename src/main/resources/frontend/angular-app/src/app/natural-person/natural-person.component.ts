import { Component, OnInit } from '@angular/core';
import { NaturalPerson } from './model/natural-person';
import { NaturalPersonService } from './service/natural-person.service';
import { element } from 'protractor';
import { EntityFormComponent } from "../shared/component/entity-form/entity-form.component";

@Component({
  selector: 'bk-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent extends EntityFormComponent<NaturalPerson> {
  constructor(){}
}
