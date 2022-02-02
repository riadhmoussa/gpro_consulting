import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chaine } from '../model/Chaine';

@Component({
  selector: 'app-add-chaine',
  templateUrl: './add-chaine.component.html',
  styleUrls: ['./add-chaine.component.css']
})
export class AddChaineComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addChaine(value: Chaine) {
    console.log(value)
    if(value.nom.length==0){
      this.toastr.error('Fill out your form');

    }else {

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
