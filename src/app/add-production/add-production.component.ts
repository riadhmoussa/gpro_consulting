import { Component, OnInit } from '@angular/core';
import {ResponseRequest} from "../model/ResponseRequest";
import {Chaine} from "../model/Chaine";
import {HttpErrorResponse} from "@angular/common/http";
import {SectionService} from "../services/section.service";
import {ChaineService} from "../services/chaine.service";
import {ToastrService} from "ngx-toastr";
import {Section} from "../model/Section";
import {ProductionService} from "../services/production.service";
import {Production} from "../model/Production";

@Component({
  selector: 'app-add-production',
  templateUrl: './add-production.component.html',
  styleUrls: ['./add-production.component.css']
})
export class AddProductionComponent implements OnInit {
  public sections: Section[]= [];
  public chaines: Chaine[]= [];
  public productions: Production[]= [];

  constructor(private productionService: ProductionService,private sectionService: SectionService,private chaineService: ChaineService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getChaines()
    this.getSections()
    this.getProductions()
  }

  addProduction(value: Production) {
    console.log(value)
    if(value.id_chaine.length==0||value.id_section.length==0||value.dateProduction.length==0){
      this.toastr.error('Fill out your form');
    }else {
      // @ts-ignore
      this.productionService.addProduction(value).subscribe((response: ResponseRequest) => {
        if (response.message != 'success'){
          this.toastr.error('SVP Réssayer');

        }else{
          this.toastr.success('Ajouter avec succès');


        }

      });
    }
  }


  public getChaines(): void {
    this.chaineService.getChaines().subscribe(
      (response: ResponseRequest) => {
        this.chaines = response.data as Chaine[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getSections(): void {
    this.sectionService.getSections().subscribe(
      (response: ResponseRequest) => {
        this.sections = response.data as Chaine[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getProductions(): void {
    this.productionService.getProductions().subscribe(
      (response: ResponseRequest) => {
        this.productions = response.data as Production[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
