import { Component, OnInit } from '@angular/core';
import {ResponseRequest} from "../model/ResponseRequest";
import {Chaine} from "../model/Chaine";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductionService} from "../services/production.service";
import {Section} from "../model/Section";
import {Production} from "../model/Production";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public productions: Production[]= [];

  constructor(private productionService: ProductionService,private router: Router) { }

  ngOnInit(): void {
    this.getProductions()
  }

  goToQuality(id:number){
    var production =  this.productions.find(x => x.id == id);
    this.router.navigateByUrl('/qulaity', { state: production });
  }

  goToHistory(id:number){
    var production =  this.productions.find(x => x.id == id);
    this.router.navigateByUrl('/history', { state: production });
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
