import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(value: User) {
    console.log(value)
    if(value.nom.length==0||value.prenom.length==0||value.email.length==0||value.password.length==0){
      this.toastr.error('Fill out your form');

    }else if(value.password===value.password_confirmation){

    }else{
      this.toastr.error('wrong match in  your password');
    }

    /* this.userService.LoginIn(value).subscribe((response: Response) => {
      if (response.message === 'false'){
        this.toastr.error('E-mail ou mot de passe incorrect');

      }else{
        localStorage.setItem('idUser', String((response.data.user as User).id));
        this.toastr.success('Connectez-vous avec succès');
        console.log(value.email);
        if (value.email === 'admin@admin.com'){
          this.router.navigateByUrl('/admin');


        }else{
          this.router.navigateByUrl('/home');

        }

      }
      console.log(response.message);
    });
    console.log(value); */
  }
}
