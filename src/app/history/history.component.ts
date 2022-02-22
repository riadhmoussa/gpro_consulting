import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Production} from "../model/Production";
import {PersonService} from "../services/person.service";
import {ToastrService} from "ngx-toastr";
import {ResponseRequest} from "../model/ResponseRequest";
import {Section} from "../model/Section";
import {Person} from "../model/Person";
import {HttpErrorResponse} from "@angular/common/http";
import {PersonPipe} from "../person.pipe";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  production: Partial<Production> = {};
  public persons: Person[]= [];
  queryString: any;

  constructor(private location:Location,private sectionService: PersonService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.production = this.location.getState() as Production
    this.getPersons((this.location.getState() as Production).id)

  }
  public getPersons(id:number): void {
     this.sectionService.getPersons(id).subscribe(
       (response: ResponseRequest) => {
         this.persons = response.data.production.persons as Person[];
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }
}
