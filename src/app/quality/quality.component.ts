import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Production} from "../model/Production";
import {Person} from "../model/Person";
import {SectionService} from "../services/section.service";
import {ToastrService} from "ngx-toastr";
import {PersonService} from "../services/person.service";
import {ResponseRequest} from "../model/ResponseRequest";
import {Chaine} from "../model/Chaine";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {
    production: Partial<Production> = {};

  constructor(private location:Location,private sectionService: PersonService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.production = this.location.getState() as Production

 //   this.production = this.location.getState()

  }

  addProduction(value:Person){
    console.log(value)
    // @ts-ignore
    value.id_production = this.production.id
    if(value.nom.length==0){
      this.toastr.error('Fill out your form');
    }else {
      // @ts-ignore
      this.sectionService.addPerson(value).subscribe((response: ResponseRequest) => {
        if (response.message != 'success'){
          this.toastr.error('SVP Réssayer');

        }else{
          this.toastr.success('Ajouter avec succès');
          this.back()
          //this.getSections();

        }

      });
    }
  }
  back(): void {
    this.location.back()
  }
  /*public getPersons(): void {
    this.sectionService.getSections().subscribe(
      (response: ResponseRequest) => {
        this.sections = response.data as Chaine[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
}
