import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chaine } from '../model/Chaine';
import {UserService} from "../services/user.service";
import {ChaineService} from "../services/chaine.service";
import {ResponseRequest} from "../model/ResponseRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-chaine',
  templateUrl: './add-chaine.component.html',
  styleUrls: ['./add-chaine.component.css']
})
export class AddChaineComponent implements OnInit {
  public chaines: Chaine[]= [];

  constructor(private chaineService: ChaineService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getChaines();
  }

  addChaine(value: Chaine) {
    if(value.nom.length==0){
      this.toastr.error('Fill out your form');
    }else {
      // @ts-ignore
      this.chaineService.addChaine(value).subscribe((response: ResponseRequest) => {
        if (response.message != 'success'){
          this.toastr.error('SVP Réssayer');

        }else{
          this.toastr.success('Ajouter avec succès');
          this.getChaines();

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
}
