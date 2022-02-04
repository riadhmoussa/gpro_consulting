import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Section } from '../model/Section';
import {Chaine} from "../model/Chaine";
import {ResponseRequest} from "../model/ResponseRequest";
import {HttpErrorResponse} from "@angular/common/http";
import {ChaineService} from "../services/chaine.service";
import {SectionService} from "../services/section.service";

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
  public sections: Section[]= [];

  constructor(private sectionService: SectionService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSections()
  }

  addSection(value: Chaine) {
    if(value.nom.length==0){
      this.toastr.error('Fill out your form');
    }else {
      // @ts-ignore
      this.sectionService.addSection(value).subscribe((response: ResponseRequest) => {
        if (response.message != 'success'){
          this.toastr.error('SVP Réssayer');

        }else{
          this.toastr.success('Ajouter avec succès');
          this.getSections();

        }

      });
    }

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
}
