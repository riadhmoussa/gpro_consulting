import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/User';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {ResponseRequest} from "../model/ResponseRequest";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(value: User) {
    console.log(value)
    if(value.nom.length==0||value.prenom.length==0||value.email.length==0||value.password.length==0){
      this.toastr.error('Fill out your form');

    }else if(value.password===value.password_confirmation){
      // @ts-ignore
      this.userService.Register(value).subscribe((response: ResponseRequest) => {
        if (response.message != 'success'){
          this.toastr.error('SVP Réssayer');

        }else{
          localStorage.setItem('idUser', String((response.data as User).id));
          this.toastr.success('Connectez-vous avec succès');

          this.router.navigateByUrl('/dashboard');

        }
        console.log(response.message);
      });
    }else{
      this.toastr.error('wrong match in  your password');
    }

  }
}
