import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ResponseRequest} from "../model/ResponseRequest";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(value: User) {
    // @ts-ignore
    this.userService.LoginIn(value).subscribe((response: ResponseRequest) => {
      if (response.message != 'success'){
        this.toastr.error('E-mail ou mot de passe incorrect');

      }else{
        localStorage.setItem('idUser', String((response.data.user as User).id));
        this.toastr.success('Connectez-vous avec succès');
        console.log(value.email);
        this.router.navigateByUrl('/dashboard');

      }
      console.log(response.message);
    });
    console.log(value);
  }

}
