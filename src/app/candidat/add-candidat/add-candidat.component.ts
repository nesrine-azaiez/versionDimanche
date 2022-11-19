import {Component, Input, OnInit} from '@angular/core';
import {Candidat} from '../../core/model/candidat';
import {CandidatService} from '../../services/candidat.service';
// @ts-ignore
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
// import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from 'ngx-qrcode2';

class User {
}

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  listCandidat: Candidat[];
  @Input() candidat = new Candidat();
  idC: number;

  constructor(private services: CandidatService, private router: Router /*private snackbar: MatSnackBar*/) {
  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  addCandidacy(){
    this.services.addCandidacy(this.candidat, ).subscribe(candidat => {
      console.log(candidat);

    });

    this.router.navigate(['candidat-list']).then(() => {
      window.location.reload();
    });

  }
  /////////////////////////////////////
/*
  // tslint:disable-next-line:typedef
  getCandidacy(){
    this.services.getCandidacy().subscribe(
      (data: Candidat[]) => {this.listCandidat = data});

    return this.listCandidat;
  }
  // tslint:disable-next-line:typedef
 /*
  addCandidacy(idC: number)
  {
    this.services.addCandidacy(this.candidat, 3).subscribe(
      data => {
        this.getCandidacy();
      });

   // const formData = new FormData();

    /*for (let i = 0 ;i<this.imagePath.length ; i++)
    {
      const element  =  this.imagePath[i];

      formData.append('files',element);
    }


    this.serviceForm.uploadFile(formData,1).subscribe(res => {
      console.log(res)
    });
    */
/*
    this.snackbar.open(' ajout avec succees', 'Undo', {
      duration: 2000
    });

  }
  */

  // tslint:disable-next-line:typedef
 /* UpdateCandidacy(can: Candidat, idC: number)
  {

    this.services.updateCandidacy(can, idC).subscribe(
      data => {
        this.getCandidacy();
      });

    this.snackbar.open(' Produit mis a jours avec succées', 'Undo', {
      duration: 2000
    });
  }
  */
}