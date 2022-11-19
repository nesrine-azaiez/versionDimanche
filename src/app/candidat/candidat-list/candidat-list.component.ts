import { Component, OnInit } from '@angular/core';
import {Candidat} from '../../core/model/candidat';
import {CandidatService} from '../../services/candidat.service';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {

  listCandidat: Candidat[];

  constructor(private serviceCandidat: CandidatService) {this.get(); }

  ngOnInit(): void {}
  get()
  {
    return  this.serviceCandidat.getCandidacy().subscribe(
      (data: Candidat[]) => this.listCandidat = data);
  }

  SearchMultiple(key: string): void
  {
    if (key == '') {
      this.get();
    }
    else if (key != null)
    {
      this.serviceCandidat.SerachMultiple(key).subscribe(
        (data: Candidat[]) => {
          this.listCandidat = data;
        }
      );
    }
  }
}
