import { Component, OnInit } from '@angular/core';
import { SearchCup } from 'src/app/model/search-cup.model';
import { ToastrService } from 'ngx-toastr';
import { CupAction } from 'src/app/store/cup/cup.action';

import { Store } from '@ngxs/store';
import { CupSelector } from 'src/app/store/cup/cup.selector';


@Component({
  selector: 'app-search-cups',
  templateUrl: './search-cups.component.html',
  styleUrls: ['./search-cups.component.scss']
})
export class SearchCupsComponent implements OnInit {

  loading = false;
   isButtonDisabled: boolean = false;

  data: SearchCup[] = [];

  constructor(
    private toastr: ToastrService, 
    private store : Store
    ) {

  this.store.select(CupSelector.getDeleteLoading).subscribe(value => this.loading = value);
  this.store.select(CupSelector.getReadData).subscribe(value => this.data = value);
  this.store.select(CupSelector.getReadLoading).subscribe(value => this.loading = value);
}

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {

    // this.loading = true;
    this.store.dispatch(new CupAction.Read()).subscribe({
      next: value =>{        
        this.loading = false;
      },
      error: err => console.log(err)
    })
  }

  deleteButton(cup: SearchCup): void {
      if (this.isButtonDisabled) {
        return;
      }
  
      this.isButtonDisabled = true;
  
    this.store.dispatch(new CupAction.Delete(cup.id)).subscribe({
      next: () => {
        this.toastr.success('Congrat 😎');
        this.refresh();        
         this.isButtonDisabled = false;       
      },
      error: () => {
        this.toastr.error('Erreur 😔');
      },
      
    });
  }
}





